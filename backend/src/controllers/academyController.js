const db = require('../dropaminDb');

exports.getLevels = (req, res) => {
    const sql = 'SELECT * FROM levels ORDER BY id ASC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

exports.register = (req, res) => {
    const { user_name, user_email, level_id, city } = req.body;

    // Validation
    if (!user_name || !user_email || !level_id || !city) {
        return res.status(400).json({
            error: 'user_name, user_email, level_id, and city are required'
        });
    }

    // Check if level exists
    db.get('SELECT * FROM levels WHERE id = ?', [level_id], (err, level) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (!level) {
            return res.status(404).json({ error: 'Selected level not found' });
        }

        const sql = `INSERT INTO registrations (user_name, user_email, level_id, city, status) 
                     VALUES (?, ?, ?, ?, ?)`;
        const params = [user_name, user_email, level_id, city, 'pending'];

        db.run(sql, params, function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({
                message: 'Registration successful',
                data: {
                    id: this.lastID,
                    user_name,
                    user_email,
                    level_name: level.name,
                    city
                }
            });
        });
    });
};

exports.getStats = (req, res) => {
    const sql = 'SELECT * FROM academy_stats';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

exports.getTestimonials = (req, res) => {
    const sql = 'SELECT * FROM testimonials ORDER BY id DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

exports.getPricing = (req, res) => {
    const sql = 'SELECT * FROM pricing ORDER BY price ASC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const formattedRows = rows.map(row => ({
            ...row,
            features: row.features_json ? JSON.parse(row.features_json) : []
        }));
        res.json({
            message: 'success',
            data: formattedRows
        });
    });
};

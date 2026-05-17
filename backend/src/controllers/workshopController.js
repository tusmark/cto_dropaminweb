const db = require('../dropaminDb');

exports.getAllWorkshops = (req, res) => {
    const sql = 'SELECT * FROM dropamin_workshops ORDER BY date ASC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

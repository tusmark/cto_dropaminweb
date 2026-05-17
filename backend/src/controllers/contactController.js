const db = require('../database');
const { successResponse, errorResponse } = require('../../../utils/apiResponse');
const { validateContactForm } = require('../../../utils/validation');

exports.submitContactForm = (req, res) => {
    const { name, email, subject, message } = req.body;
    
    const { isValid, errors } = validateContactForm({ name, email, message });

    if (!isValid) {
        return res.status(400).json(errorResponse('Validation failed', errors));
    }

    const sql = 'INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const params = [name, email, subject, message];
    
    db.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json(errorResponse('Database error', err));
        }
        res.json(successResponse({ id: this.lastID }, 'Message submitted successfully'));
    });
};

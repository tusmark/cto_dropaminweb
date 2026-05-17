const db = require('../database');
const { successResponse, errorResponse } = require('../../../utils/apiResponse');

exports.getAllProjects = (req, res) => {
    const sql = 'SELECT * FROM projects ORDER BY created_at DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json(errorResponse('Failed to fetch projects', err));
        }
        res.json(successResponse(rows));
    });
};

exports.getProjectById = (req, res) => {
    const sql = 'SELECT * FROM projects WHERE id = ?';
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            return res.status(500).json(errorResponse('Failed to fetch project', err));
        }
        if (!row) {
            return res.status(404).json(errorResponse('Project not found'));
        }
        res.json(successResponse(row));
    });
};

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../database.sqlite');
const schemaPath = '/home/team/shared/db/schema.sql';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDatabase();
    }
});

function initializeDatabase() {
    if (fs.existsSync(schemaPath)) {
        const schema = fs.readFileSync(schemaPath, 'utf8');
        db.exec(schema, (err) => {
            if (err) {
                console.error('Error initializing database', err.message);
            } else {
                console.log('Database initialized with schema.');
            }
        });
    } else {
        console.warn('Schema file not found at', schemaPath);
    }
}

module.exports = db;

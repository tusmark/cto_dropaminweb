const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../dropamin.sqlite');
const tourSchemaPath = '/home/team/shared/dropamin/data-structure.sql';
const academySchemaPath = '/home/team/shared/dropamin/academy-schema.sql';

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the Dropamin SQLite database at:', dbPath);
        initializeDatabase();
    }
});

function initializeDatabase() {
    // Initialize Tour Table
    initializeTable('dropamin_workshops', tourSchemaPath, 'Tour');
    
    // Initialize Academy Tables
    initializeTable('levels', academySchemaPath, 'Academy');
}

function initializeTable(tableName, schemaFile, label) {
    if (!fs.existsSync(schemaFile)) {
        console.warn(`${label} schema file not found at`, schemaFile);
        return;
    }

    db.get(`SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='${tableName}'`, (err, row) => {
        if (err) {
            console.error(`Error checking for ${tableName} table:`, err.message);
            return;
        }

        if (row.count === 0) {
            console.log(`Table ${tableName} does not exist. Initializing ${label} schema...`);
            const schema = fs.readFileSync(schemaFile, 'utf8');
            db.exec(schema, (err) => {
                if (err) {
                    console.error(`Error initializing ${label} database`, err.message);
                } else {
                    console.log(`${label} database initialized successfully.`);
                }
            });
        } else {
            console.log(`${label} table ${tableName} already exists.`);
        }
    });
}

module.exports = db;

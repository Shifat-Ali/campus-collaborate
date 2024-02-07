const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 20,
    connectionTimeoutMillis: 3000,
    idleTimeoutMillis: 30000,
});

// Graceful shutdown when receiving SIGTERM or SIGINT signals
process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Closing pool...');
    pool.end(() => {
        console.log('Connection pool has been closed.');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Closing pool...');
    pool.end(() => {
        console.log('Connection pool has been closed.');
        process.exit(0);
    });
});

// const pool = new Pool({
//     host:process.env.PGHOST,
//     port:process.env.DB_PORT,
//     user:process.env.PGUSER,
//     password:process.env.PGPASSWORD,
//     database:process.env.PGDATABASE,
//     ssl: {
//         require: true,
//     },
//
//     max:20,
//     connectionTimeoutMillis: 3000,
//     idleTimeoutMillis: 30000,
// })

module.exports = pool
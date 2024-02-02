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
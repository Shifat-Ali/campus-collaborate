const app = require("express")();
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


app.get("/users", async (req, res) => {
    try {
        const fromDate = new Date();
        //return all rows
        const results = await pool.query("select id, username, email from users")
        console.table(results.rows)
        console.log(new Date())
        const toDate = new Date();
        const elapsed = toDate.getTime() - fromDate.getTime();

        //send it to the wire
        res.send({ "rows": results.rows, "elapsed": elapsed, "method": "pool" })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

app.listen(2015, () => console.log("Listening on port 2015"))
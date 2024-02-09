const pool = require('../db/pool');

async function f() {
    sql = `
        SELECT *
        FROM backend.user_course_ratings
    `
    result = await pool.query(sql);

    console.table(result.rows);
}

f();
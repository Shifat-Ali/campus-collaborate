const pool = require('../db/pool')

async function getAllQueries(req, res) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const maxLimit = 20;
    if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
    if (isNaN(page)) page = 1;
    try {
        const response = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(id) FROM backend.queries");
        const count = JSON.parse(JSON.stringify(results.rows))[0].count;
        if (page > 1) {
            response.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        if (endIndex < count) {
            response.next = {
                page: page + 1,
                limit: limit,
            }
        }

        let queryObj = {};

        sql = ` SELECT id, title, body, user_id, created_at
                FROM backend.queries
                ORDER BY created_at DESC
                OFFSET ${startIndex} LIMIT ${limit};
            `
        results = await pool.query(sql)
        response.rows = results.rows;
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllQueries
}
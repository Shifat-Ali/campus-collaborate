const pool = require('../db/pool')

async function getAllUsers(req, res) {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const maxLimit = 20;
    if(isNaN(page)) page =1;
    if(isNaN(limit) || limit > maxLimit)limit =maxlimit ;
    try {
       
       
        const response = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(id) FROM backend.courses");
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
        sql = ` SELECT id, username, firstname, lastname, email, contact_no, about
                FROM backend.users
                ORDER BY id DESC
                OFFSET ${startIndex} LIMIT ${limit};
            `
        results = await pool.query(sql)
        response.users = results.rows;
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllUsers
}
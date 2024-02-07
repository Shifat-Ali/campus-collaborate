const pool = require('./pool')

async function getVotesByQueryId(query_id) {
    try {
        sql = `
        SELECT
            COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
            COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
        FROM backend."queriesVotes"
        WHERE query_id = 512;
    `
        results = await (pool.query(sql));
        return results.rows[0];
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getVotesByQueryId
}
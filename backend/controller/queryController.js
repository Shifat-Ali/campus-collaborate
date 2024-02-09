const { getCommentCountByQueryId, getAnswersByQueryId } = require('../db/commentController');
const pool = require('../db/pool');
const { getTagsByQueryId } = require('../db/tagsController');
const { getVotesByQueryId } = require('../db/votesController');


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
        const count = results.rows[0].count;
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

        sql = ` SELECT t1.id as id, title, body, created_at, user_id, username, profile_photo
                FROM backend.queries as t1
                INNER JOIN backend.users as t2
                ON t1.user_id = t2.id
                ORDER BY created_at DESC
                OFFSET ${startIndex} LIMIT ${limit};
            `
        results = await pool.query(sql)

        for (let query of results.rows) {
            query.body = query.body.slice(0, 200) + '...';
            query.tags = await getTagsByQueryId(query.id);
            query.numOfComments = await getCommentCountByQueryId(query.id);
            votes = await getVotesByQueryId(query.id);
            query.upvotes = votes.upvotes;
            query.downvotes = votes.downvotes;
        }

        response.queries = results.rows;
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

async function getQueryByQueryId(req, res) {
    const query_id = parseInt(req.query.id);
    try {
        const response = {};
        sql = `
            SELECT t1.id as id, title, body, created_at, user_id, user_name, profile_photo
            FROM backend.queries AS t1
            INNER JOIN backend.users AS t2
            ON t1.user_id = t2.id
            WHERE t1.id = $1
        `

        results = await pool.query(sql, [query_id]);

        let query = results.rows[0];
        query.tags = await getTagsByQueryId(query.id);
        query.numOfComments = await getCommentCountByQueryId(query.id);
        votes = await getVotesByQueryId(query.id);
        query.upvotes = votes.upvotes;
        query.downvotes = votes.downvotes;

        response.query = results.rows[0];
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllQueries,
    getQueryByQueryId
}
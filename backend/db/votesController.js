const pool = require('./pool')

async function getVotesByQueryId(query_id) {
    try {
        sql = `
        SELECT
            COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
            COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
        FROM backend."queriesVotes"
        WHERE query_id = $1;
    `
        results = await pool.query(sql, [query_id]);
        return results.rows[0];
    }
    catch (err) {
        throw err;
    }
}


async function getVotesByCommentId(comment_id) {
    try {
        sql = `
        SELECT
            COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
            COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
        FROM backend."commentVotes"
        WHERE comment_id = $1;  
    `
        results = await pool.query(sql, [comment_id]);
        return results.rows[0];
    }
    catch (err) {
        throw err;
    }
}

async function getVotesByProjectId(project_id){
    try {
        sql = `
        SELECT
            COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
            COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
        FROM backend."projectVotes"
        WHERE project_id = $1;  
    `
        results = await pool.query(sql, [project_id]);
        return results.rows[0];
    }
    catch (err) {
        throw err;
    }
}
async function addVoteToQuery(query_id, user_id, vote) {
    try {
        sql = `
            INSERT INTO backend."queriesVotes" (user_id, query_id, vote)
            VALUES ($1, $2, $3)
        `
        results = await pool.query(sql, [user_id, query_id, vote]);
    } catch (error) {
        throw error;
    }
}

async function addVoteToComment(comment_id, user_id, vote) {
    try {
        sql = `
            INSERT INTO backend."commentVotes" (comment_id, user_id, vote)
            VALUES ($1, $2, $3)
        `
        results = await pool.query(sql, [comment_id, user_id, vote]);
        // console.log(results);
    } catch (error) {
        throw error;
    }
}
async function addVoteToProjectId(project_id,user_id,vote) {
    try {
        sql = `
            INSERT INTO backend."projectVotes" (project_id, user_id, vote)
            VALUES ($1, $2, $3)
        `
        results = await pool.query(sql, [project_id, user_id, vote]);
        // console.log(results);
    } catch (error) {
        throw error;
    }

}

async function deleteVoteFromComment(comment_id, user_id) {
    try {
        sql = `
            DELETE
            FROM backend."commentVotes"
            WHERE comment_id = $1 and user_id = $2
        `

        results = await pool.query(sql, [comment_id, user_id])
    } catch (error) {
        throw error;
    }
}


async function deleteVoteFromQuery(query_id, user_id) {
    try {
        sql = `
            DELETE
            FROM backend."queriesVotes"
            WHERE user_id = $1 and query_id = $2;
        `
        results = await pool.query(sql, [user_id, query_id])
    } catch (error) {
        throw error;
    }
}

async function deleteVoteFromProjectId(project_id ,user_id,vote){
   try{ sql= `DELETE FROM backend.projectVotes 
    WHERE user_id = ${user_id} and project_id = ${project_id}`
    result = await pool.query(sql)}
    catch(err){
        throw err;
    }
}


module.exports = {
    getVotesByQueryId,
    getVotesByCommentId,
    addVoteToQuery,
    addVoteToComment,
    deleteVoteFromQuery,
    deleteVoteFromComment,
    getVotesByProjectId,
    addVoteToProjectId,
    deleteVoteFromProjectId

}
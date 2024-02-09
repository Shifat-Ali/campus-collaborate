const pool = require('./pool');
const { getVotesByCommentId } = require('./votesController');

async function processComment(comment) {
    count = await getCommentReplyCountByCommentId(comment.id);
    comment.more_replies = (count > 5);
    votes = await getVotesByCommentId(comment.id);
    comment.upvotes = votes.upvotes;
    comment.downvotes = votes.downvotes;
    if (count > 0) {
        comment.replies = await getLimitedCommentReplyByCommentId(comment.id);
    }
    else {
        comment.replies = [];
    }
    // console.log("process\n", comment);
    return;
}

async function getCommentReplyCountByCommentId(comment_id) {
    try {
        sql = `
            SELECT COUNT(reply_id)
            FROM backend.comment_reply
            WHERE comment_id = $1
        `
        results = await pool.query(sql, [comment_id]);
        return results.rows[0].count;
    } catch (error) {
        throw error;
    }
}

async function getCommentCountByQueryId(query_id) {
    try {
        sql = `
            SELECT COUNT(id)
            FROM backend.answer
            WHERE query_id = $1
        `
        results = await pool.query(sql, [query_id]);
        return results.rows[0].count;
    } catch (error) {
        throw error;
    }
}

async function getLimitedCommentReplyByCommentId(comment_id) {
    try {
        sql = `
        SELECT t1.reply_id as id, comment_id, body, created_at, user_id, username, profile_photo
        FROM backend.comment_reply as t1
        INNER JOIN backend.comments as t2
        ON t1.reply_id = t2.id
        INNER JOIN backend.users as t3
        ON t2.user_id = t3.id
        WHERE t1.comment_id = $1
        ORDER BY t2.created_at DESC
        LIMIT 5
    `
        results = await pool.query(sql, [comment_id]);
        let replies = results.rows;
        for (let reply of replies) {
            // console.log(reply);
            await processComment(reply);
        }
        return replies;

    } catch (error) {
        throw error;
    }
}

async function getAllCommentReplyByCommentId(comment_id) {
    try {
        sql = `
        SELECT comment_id, reply_id, body, created_at, user_id, username, profile_photo
        FROM backend.comment_reply as t1
        INNER JOIN backend.comments as t2
        ON t1.reply_id = t2.id
        INNER JOIN backend.users as t3
        ON t2.user_id = t3.id
        WHERE t1.comment_id = $1
        ORDER BY t2.created_at DESC
    `
        results = await pool.query(sql, [comment_id]);
        let replies = results.rows;
        for (let reply of replies) {
            // console.log(reply);
            await processComment(reply);
        }
        return replies;

    } catch (error) {
        throw error;
    }
}

async function getAnswersByQueryId(query_id, offset, limit) {
    try {
        sql = `
            SELECT t1.comment_id as id, query_id, body, created_at, user_id, username, profile_photo
            FROM backend.answer AS t1
            INNER JOIN backend.comments AS t2
            ON t1.comment_id = t2.id
            INNER JOIN backend.users AS t3
            ON t2.user_id = t3.id
            WHERE t1.query_id = $1
            ORDER BY created_at DESC
            OFFSET $2 LIMIT $3;
        `

        results = await pool.query(sql, [query_id, offset, limit]);
        let comments = results.rows;

        for (let comment of comments) {
            await processComment(comment);
            // console.log(comment);
        }

        // console.log(JSON.stringify(comments, null, 2));
        return comments;

    } catch (error) {
        throw error;
    }
}

//getAnswersByQueryId(838, 0, 5); // example to test the nested comment {uncomment the console.log in above function}

async function getFeedbackByProjectId(project_id, offset, limit) {
    try {
        sql = `
            SELECT t1.comment_id as id, project_id, body, created_at, user_id, username, profile_photo
            FROM backend.feedback AS t1
            INNER JOIN backend.comments AS t2
            ON t1.comment_id = t2.id
            INNER JOIN backend.users AS t3
            ON t2.user_id = t3.id
            
            WHERE t1.project_id = $1
            ORDER BY created_at DESC
            OFFSET $2 LIMIT $3;
        `

        results = await pool.query(sql, [project_id, offset, limit]);
        let comments = results.rows;

        for (let comment of comments) {
            await processComment(comment);
            // console.log(comment);
        }

        // console.log(JSON.stringify(comments, null, 2));
        return comments;

    } catch (error) {
        throw error;
    }
}

async function addComment(user_id, body) {
    try {
        sql = `
            INSERT INTO backend.comments (user_id, body)
            VALUES ($1, $2)
            RETURNING id
        `
        results = await pool.query(sql, [user_id, body]);
        // console.log(results);
        return result.rows[0];
    }
    catch (error) {
        throw error;
    }
}

async function addAnswer(query_id, user_id, body) {
    try {
        sql = `
        INSERT INTO backend.answer (query_id, comment_id)
        VALUES ($1, $2)
    `
        answer = await addComment(user_id, body);
        results = await pool.query(sql, [query_id, answer.id]);
        // console.log(answer, results);
        return answer;

    } catch (error) {
        throw error;
    }
}

async function addFeedback(project_id, user_id, body) {
    try {
        sql = `
        INSERT INTO backend.feedback (project_id, comment_id)
        VALUES ($1, $2)
    `
        feedback = await addComment(user_id, body);
        results = await pool.query(sql, [project_id, feedback.id]);
        // console.log(feedback, results);
        return feedback;

    } catch (error) {
        throw error;
    }
}

async function addCommentReply(comment_id, user_id, body) {
    try {
        sql = `
            INSERT INTO backend.comment_reply (comment_id, reply_id)
            VALUES ($1, $2)
        `
        reply = await addComment(user_id, body);
        results = await pool.query(sql, [comment_id, reply.id]);
        // console.log(reply, results);
        return reply;

    } catch (error) {
        throw error;
    }
}

async function deleteCommentByCommentId(comment_id, user_id) {
    try {
        sql = `
            DELETE
            FROM backend.comments
            WHERE id = $1 AND user_id = $2
        `
        results = await pool.query(sql, [comment_id, user_id]);
        if (results.rowCount === 0) {
            throw new Error("Record doesn't exists");
        }
    } catch (error) {
        throw error;
    }
}


module.exports = {
    addAnswer,
    addFeedback,
    addCommentReply,
    getAnswersByQueryId,
    getCommentCountByQueryId,
    getAllCommentReplyByCommentId,
    getFeedbackByProjectId,
    deleteCommentByCommentId,
}


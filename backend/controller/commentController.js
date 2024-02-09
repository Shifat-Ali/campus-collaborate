const { getCommentCountByQueryId, getAnswersByQueryId, getFeedbackByProjectId, getCommentCountByProjectId, addAnswer, addFeedback } = require('../db/commentController');

async function getCommentByQueryId(req, res) {
    const query_id = parseInt(req.params.id);
    page = parseInt(req.query.page);
    limit = parseInt(req.query.limit);
    const maxLimit = 20;
    if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
    if (isNaN(page)) page = 1;
    try {
        const response = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const count = await getCommentCountByQueryId(query_id);
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
        // console.log('called comments');
        response.comments = await getAnswersByQueryId(query_id, startIndex, limit)
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);

    }
}

async function getCommentByProjectId(req, res) {
    const project_id = parseInt(req.params.id);
    page = parseInt(req.query.page);
    limit = parseInt(req.query.limit);
    const maxLimit = 20;
    if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
    if (isNaN(page)) page = 1;
    try {
        const response = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const count = await getCommentCountByProjectId(project_id);
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
        // console.log('called comments');
        response.comments = await getFeedbackByProjectId(project_id, startIndex, limit)
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);

    }
}

async function addCommentToQuery(req, res) {
    const user_id = parseInt(req.body.user_id);
    const body = req.body.body;
    const query_id = parseInt(req.params.id);
    try {
        if (isNaN(user_id)) {
            throw Error('Invalid user id');
        }
        if (isNaN(query_id)) {
            throw Error('Invalid project id');
        }
        if (body === undefined || length(body) == 0) {
            throw Error('Invalid body of comment');
        }
        const response = {};
        response.comments = await addAnswer(query_id, user_id, body);
        res.status(200).send(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

async function addCommentToProject(req, res) {
    const user_id = parseInt(req.body.user_id);
    const body = req.body.body;
    const project_id = parseInt(req.params.id);
    try {
        if (isNaN(user_id)) {
            throw Error('Invalid user id');
        }
        if (isNaN(project_id)) {
            throw Error('Invalid project id');
        }
        if (body === undefined || length(body) == 0) {
            throw Error('Invalid body of comment');
        }
        const response = {};
        response.comments = await addFeedback(project_id, user_id, body);
        res.status(200).send(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}


module.exports = {
    getCommentByQueryId,
    getCommentByProjectId,
    addCommentToProject,
    addCommentToQuery
}
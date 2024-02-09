const router = require('express').Router()
const comments = require('../controller/commentController')

router.get('/queries/:id', comments.getCommentByQueryId);
router.post('/queries/:id', comments.addCommentToQuery);
router.get('/projects/:id', comments.getCommentByProjectId);
router.post('/projects/:id', comments.addCommentToProject);
module.exports = router;
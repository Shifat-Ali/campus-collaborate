const query = require('../controller/queryController');
const router = require('express').Router()


router.get('/', query.getAllQueries);
router.get('/:id', query.getQueryByQueryId);
module.exports = router;
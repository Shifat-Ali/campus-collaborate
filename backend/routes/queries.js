const query = require('../controller/queryController');
const router = require('express').Router()


router.get('/', query.getAllQueries);
module.exports = router;
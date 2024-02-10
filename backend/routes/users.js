const router = require('express').Router()

const auth = require('../middlewares/auth')
const certs = require('./user/certificates')
const exp = require('./user/experiences')
const project = require('./user/projects')
const course = require('./user/courses')
const fol = require("../controller/followController");
const skill = require('../routes/user/skills')
const recommendation = require('../routes/user/recommendations')
const { getUser } = require('../controller/getUser')

router.use('/', getUser);

router.use('/certificates', certs);
router.use('/experience', exp);
router.use('/projects', project);
router.use('/courses', course);
router.use('/skills', skill);
router.use('/recommendations', recommendation);

router.get('/followers', fol.getAllFollowers);
router.get('/following', fol.getUserFollowing);
router.post('/follow/:id', fol.followUser);
router.post('/unfollow/:id', fol.unfollowUser);



module.exports = router;

const router = require('express').Router()

const auth = require('../middlewares/auth')
const certs = require('./user/certificates')
const exp = require('./user/experiences')
const project = require('./user/projects')
const course = require('./user/courses')
const fol = require("../controller/followController");



router.use('/certificates',certs);
router.use('/experience',exp);
router.use('/projects',project);
router.use('/courses',course);

router.get('/followers',fol.getAllFollowers);
router.get('/following',fol.getUserFollowing);
router.post('/follow/:id',fol.followUser);
router.post('/unfollow/:id',fol.unfollowUser);



module.exports=router;

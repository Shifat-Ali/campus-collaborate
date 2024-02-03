const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const course = require('../../controller/courseController')

router.get('/',course.getCourses)
router.post('/',auth,course.addCourse)

module.exports = router
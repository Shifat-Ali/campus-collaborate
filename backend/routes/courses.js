const express = require('express');
const router = express.Router();

const course = require('../controller/courseController');

router.get('/', course.getAllCourses);
router.get('/:id', course.getCourseById);
router.get('/reviews/:id', course.getReviewsOfCourse);
router.post('/review', course.addReview);
router.post('/rating', course.addRating);

module.exports = router;
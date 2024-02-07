const router = require('express').Router()
const express = require('express')
const auth = require('../middlewares/auth')
// const auth = require('../../middlewares/auth')
const { getAllProject,getProjectById,voteProjectById, insertProject } = require('../controller/projectcontroller')


router.get ('/',getAllProject);
router.get('/:id',getProjectById )
router.post('/:id/vote',voteProjectById)
router.post('/createproj',insertProject)
router.post('/:id/feedback')
router.get('/:id/votes')

module.exports=router;
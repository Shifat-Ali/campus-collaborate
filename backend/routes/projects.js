const router = require('express').Router()
const express = require('express')
const auth = require('../middlewares/auth')
// const auth = require('../../middlewares/auth')
const { getAllProject, getCollaboratorsByProjectId,getProjectById } = require('../controller/projectControllernew')
const {getFeedbackByProjectId} = require('../db/commentController')
const {insertProject} =require('../controller/userProjectController')
router.get ('/',getAllProject);
router.get('/projectid',getProjectById )
// router.post('/:id/vote',voteProjectById)

router.get('/collaborators',getCollaboratorsByProjectId)
// POST route to fetch feedback by project ID with pagination parameters in the URL path
router.post('/:id/feedback/:page&:limit', async (req, res) => {
    try {


        const projectId = req.params.id;
        const page = req.params.page;
        const limit = req.params.limit;

        // Calculate the offset based on the page and limit
        const offset = (page - 1) * limit;

        // Call the function to get feedback by project ID
        const feedback = await getFeedbackByProjectId(projectId, offset, limit);

        res.json(feedback);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// router.get('/:id/votes')

module.exports = router;
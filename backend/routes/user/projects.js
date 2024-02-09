const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

// const proj = require('../../controller/projectController')
const proj = require('../../controller/userProjectController')
router.get('/project',proj.getProjectsByUserId)
router.post('/project/add',auth,proj.insertProject)
router.put('/project/update',auth,proj.updateProject)
router.delete('/project/delete',auth,proj.deleteProject)

module.exports = router
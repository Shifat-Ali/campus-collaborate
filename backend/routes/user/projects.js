const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

// const proj = require('../../controller/projectController')
const proj = require('../../controller/userProjectController')
router.get('/',proj.getProjectsByUserId)
router.post('/',auth,proj.insertProject)
router.put('/',auth,proj.updateProject)
router.delete('/',auth,proj.deleteProject)

module.exports = router
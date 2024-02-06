const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const proj = require('../../controller/projectController')

router.get('/',proj.getProjects)
router.post('/',auth,proj.addProject)
router.put('/',auth,proj.editProject)
router.delete('/',auth,proj.deleteProject)

module.exports = router
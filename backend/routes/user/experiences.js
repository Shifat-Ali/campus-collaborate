const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const exp = require('../../controller/experienceController')

router.get('/',exp.getExperiences)
router.post('/',auth,exp.addExperiences)
router.put('/',auth,exp.editExperiences)
router.delete('/',auth,exp.deleteExperiences)

module.exports = router
const router = require('express').Router()
const skill = require('../../controller/skillController')

router.get('/',skill.getSkills)
router.post('/',skill.addSkill)

//exporting the router
module.exports = router
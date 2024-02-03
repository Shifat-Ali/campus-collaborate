const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const cert = require('../../controller/certificateController')

router.get('/',cert.getCertificates)
router.post('/',auth,cert.addCertificate)
router.put('/',auth,cert.editCertificate)
router.delete('/',auth,cert.deleteCertificate)

module.exports = router
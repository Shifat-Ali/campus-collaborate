const router = require('express').Router()
const certs = require('./user/certificates')


router.use('/certificates',certs);
module.exports=router;
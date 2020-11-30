const express = require('express')
const router = express.Router()

router.use('/api/v1/', require('./login/login'))
router.use('/api/v1/', require('./resources/resources'))
router.use('/api/v1/', require('./roles/roles'))

module.exports = router
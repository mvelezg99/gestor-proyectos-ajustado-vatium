const express = require('express')
const controller = require('./rolesController')

const router = express.Router()

router.get('/roles', controller.getRoles)

module.exports = router
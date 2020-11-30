const express = require('express')
const controller = require('./loginController')

const router = express.Router()

router.post('/login', controller.isValidUser)

module.exports = router
const express = require('express')
const controller = require('./resourcesController')

const router = express.Router()

router.get('/resources', controller.getResources)
router.post('/resources', controller.insertResource)
router.delete('/resources/:id', controller.deleteResource)

module.exports = router
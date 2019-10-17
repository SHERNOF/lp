const express = require('express')
const router = express.Router()
const timeController = require('./controllers/timeController')


router.get('/', timeController.home)
// router.get('/', timeController.dsplyTme)


module.exports = router
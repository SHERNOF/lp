const express = require('express')
const srn = express()
const router = require('./router')


srn.use(express.static('public'))

srn.set('views', 'views')
srn.set('view engine', 'ejs')

srn.get('/', router)

srn.listen(3000)

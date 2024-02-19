const express = require('express')
const router = express.Router()

const scoreRoutes = require('./score.routes.js')

router.use('/scores', scoreRoutes)

module.exports = router

const express = require('express')
const router = express.Router()

const notice = require('./notice')

router.use('/notice', notice)

module.exports = router

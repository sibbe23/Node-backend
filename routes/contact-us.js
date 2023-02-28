const express = require('express')
const path = require('path')
const contactusController = require('../controllers/products')
const router = express.Router()

router.get('/contact-us',contactusController.getContactus)
router.post('/contact-us',contactusController.postContactus)

router.use('/success',contactusController.success)

module.exports = router
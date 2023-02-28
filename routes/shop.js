const express = require('express')

const path = require('path')
const shopController = require('../controllers/products')

const router = express.Router()

router.get('/',shopController.shop)


module.exports = router


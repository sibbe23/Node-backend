const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})
router.post('/contact-us',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
})

router.use('/success',(req,res,next)=>{
    res.send('<h1>Form submitted Successfully</h1>')
})

module.exports = router
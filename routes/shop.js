const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.send('<h3> Hello There </h3>')
})

module.exports = router


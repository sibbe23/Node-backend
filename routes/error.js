const express = require('express')

const router = express.Router()

router.use((req,res,next)=>{
    res.status(404).send('<h4>Page not found</h4>')
})

module.exports = router
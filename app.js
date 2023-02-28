const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('This is a middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('This is 2 middleware')
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.send('<h3> Hello There </h3>')
})

app.listen(2000)
const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-product',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="number" name="size"><button type="submit">Add</button></form>')
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.send('<h3> Hello There </h3>')
})



app.listen(2000)
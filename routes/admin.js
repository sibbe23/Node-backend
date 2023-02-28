const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"> <input type="number" name="size"><button type="submit">Add</button></form>')
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router
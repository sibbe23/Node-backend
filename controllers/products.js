const path = require('path')
const express = require('express')

const Product = require('../models/product')

const rootDir = require('../util/path')
exports.getAddProduct = ('/add-product',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

exports.postAddProduct = ('/add-product',(req,res,next)=>{
    // products.push({ title: req.body.title });
    // console.log(products)
    const product = new Product(req.body.title)
    product.save();
    console.log(product)
    res.redirect('/')
})

exports.getContactus = ('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})
exports.postContactus = ('/contact-us',(req,res,next)=>{
    // products.push({ title: req.body.title });
    // console.log(products)
    const product = new Product(req.body.title)
    product.save();
    console.log(product)
    res.redirect('/success')
})

exports.success = ('/success',(req,res,next)=>{
    res.send('<h1>Form submitted Successfully</h1>')
})

exports.shop = ('/',(req,res,next)=>{
    // res.setHeader('content-type', 'text/html')
    // res.set({'content-type': 'text/html'})
    res.sendFile(path.join(rootDir,'views','shop.html'))
    const products = Product.fetchAll((products)=>{
        console.log(products)
    });
    
})

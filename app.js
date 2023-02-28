const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorRoutes = require('./routes/error')
const contactRoutes = require('./routes/contact-us')

const bodyParser = require('body-parser')

const app = express()
//add css using express by making accessible to all
app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)
app.use(errorRoutes)





app.listen(2000)
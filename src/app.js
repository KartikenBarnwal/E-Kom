//Importing required package
require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const Item = require('./models/items')
const Cart = require('./models/cart')
const newItemRouter = require('./routes/newItem')
const cartRouter = require('./routes/cartRouter')
require('./db/mongoose')

const app = express()
const port = 3000 || process.env.PORT

//Setting up views and public directory
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../views')

app.set('view engine', 'ejs')
app.set('views',viewsPath)

//Middlewares for every route
app.use(bodyparser.json()) 
// app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/newItem',newItemRouter)
app.use('/cart',cartRouter)
app.use(express.static(publicDirPath))


// rendering main page
app.get('/', async(req,res)=>{
    const items = await Item.find()
    res.render('index',{
        items
    })
})

// add to cart route
app.post('/addToCart', async(req,res)=>{
    console.log(req.body)
    const obj = req.body
    const cart = new Cart({
        name: obj.name,
        price: obj.price,
        linkForImg: obj.linkForImg
    })

    await cart.save()
})



app.listen(port,()=>{
    console.log("Server is up on port "+port)
})
const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')

router.get('', async(req,res)=>{
    const itemsOfCart = await Cart.find()
    // console.log(itemsOfCart)
    res.render('cart',{
        itemsOfCart
    })
})

//deleting the item from cart
router.post('/remove/:id', async(req,res)=>{
    const item = await Cart.findByIdAndDelete(req.params.id)
    res.redirect('/cart')
})

//updating qty in the cart
router.post('/update', async(req,res)=>{
    // console.log(req.body)
    const item = await Cart.findById(req.body._id)
    item.qty = req.body.updatedQty
    await item.save()
    console.log(item)

})


module.exports = router
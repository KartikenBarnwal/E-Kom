const express = require('express')
const router = express.Router()
const Item = require('../models/items')
const cloudinary = require('cloudinary')

router.get('',(req,res)=>{
    res.render('admin')
})

router.post('/save', async(req,res)=>{
    const item = new Item(req.body);
    try{
        await item.save()
        res.redirect('/')
        console.log(item)
    }catch(e){
        res.redirect('/')
        console.log('error!')
    }
})


module.exports = router
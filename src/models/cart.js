const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        uppercase: true
    },
    price:{
        type: Number,
        trim: true
    },
    linkForImg:{
        type: String
    },
    qty:{
        type: Number,
        default: 1
    },
    timestamp:{
        type: Date,
        defaul: Date.now
    }
})

const Cart = mongoose.model('cart',cartSchema)
module.exports = Cart






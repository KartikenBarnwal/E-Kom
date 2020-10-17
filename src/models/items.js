const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
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
    description:{
        type: String,
        trim: true
    },
    timestamp:{
        type: Date,
        defaul: Date.now
    }
})

// adSchema.methods.toJSON = function(){
//     var obj = this.toObject()

//     delete obj._id
//     delete obj.__v

//     return obj
// } 

const Item = mongoose.model('items',itemsSchema)
module.exports = Item






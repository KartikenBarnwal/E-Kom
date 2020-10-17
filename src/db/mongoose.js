const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@investocks-8camt.mongodb.net/E-Commerce',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})

// 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@investocks-8camt.mongodb.net/krAd'
// mongodb://localhost:27017/usersTesting
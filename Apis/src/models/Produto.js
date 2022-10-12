const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productnome:{
        type:String,
        required: true
    },
    productDescricao:{
        type:String,
        required:true
    },
    productPreco:{
        type:Number,
        required:true
    },
    productQuantidade:{
        type:Number,
        required: true
    },
    productImg:{
        type:String
    },
})

module.exports = mongoose.model('Product', Schema)
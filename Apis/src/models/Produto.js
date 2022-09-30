const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    produtonome:{
        type:String,
        required: true
    },
    produtoDescricao:{
        type:String,
        required:true
    },
    produtoPreco:{
        type:Number,
        required:true
    },
    produtoQuantidade:{
        type:Number,
        required: true
    },
    produtoImg:{
        type:String
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model('Produto', Schema)
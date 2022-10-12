const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "produto"
    }],
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    endereco:{
        rua:{
            type: String,
            required: true
        },
        numero :{
            type: Number,
            required: true
        },
        cidade:{
            type: String,
            required: true
        }
    },
    pagamento:{
        cartao:{
            number:{
                type: Number,
            },
            cvv:{
                type: Number,
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)
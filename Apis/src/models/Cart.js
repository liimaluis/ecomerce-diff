const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    produtos:[{
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
            type: String,
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
                type: String,
            },
            cvv:{
                type: String,
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)
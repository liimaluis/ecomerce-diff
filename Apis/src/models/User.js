const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    }
})

Schema.pre('save', async function(next){
    
    if(this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)

})

module.exports = mongoose.model('User', Schema)
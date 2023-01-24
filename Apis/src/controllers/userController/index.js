const { json } = require('express')
const User = require('../../models/User')

const userController = {

    async creatUser(req, res) {

        const bodyData = req.body

        try {

            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)

        } catch(error){

            return res.status(400).json(error)

        }
    },

    async getUsers(req, res){

        try{

            const users = await User.find()
            return res.status(200).json(users)

        } catch(error) {

            return res.status(400).json(error)
        }

    },

    async getUserById(req, res){

        const { user_id } = req.params

        try{

            const user = await User.findById(user_id)
            return res.status(200).json(user)

        } catch(error){

            return res.status(400).send(error)
        }
    },

    async deleteUserById (req, res){
        const { user_id } = req.params
        
        try {

            const deleteuser = await User.findByIdAndDelete(user_id)
            return res.status(200).json(deleteuser)
            
        } catch (error) {

            return res.status(400).json(error)
            
        }
    }
}

module.exports = userController
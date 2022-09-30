const User = require('../../models/User')

const userController = {

    async creatUser(req, res) {

        const bodyData = req.body

        try {

            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)

        } catch(error){

            return res.status(400).json(err)

        }
    }
}

module.exports = userController
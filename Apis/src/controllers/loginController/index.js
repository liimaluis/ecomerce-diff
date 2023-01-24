const User = require('../../models/User')

const LoginController ={
     
    async creatSession(req, res){

        const { email } = req.body

        try {

            const user = await User.findOne({ email })
            return res.status(200).json(user)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }
    }
}

module.exports = LoginController
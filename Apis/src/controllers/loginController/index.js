const bcryptjs = require('bcryptjs')
const User = require('../../models/User')

const LoginController ={
     
    async creatSession(req, res){

        const { email, password } = req.body

        try {

            const user = await User.findOne({ email: req.body.email })
            return res.status(200).json(user);

            if (user) {
                const cmp = await bcryptjs.compare(req.body.password, user.password)

                if(cmp){
                    res.send("Authenticação concedida")
                }
            }
            
        } catch (error) {
            
            return res.status(400).json(error)
        }
    }
}

module.exports = LoginController
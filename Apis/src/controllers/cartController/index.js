const Cart = require('../../models/Cart')

const cartController = {

    async creatCart(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {

            const creatCart = await Cart.create({...bodyData, username: user_id})
            return res.status(200).json(creatCart)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    },

    async getUsersCarts(req, res) {

        const { user_id } = req.params

        try {

            const userCarts= await Cart.find({ username: user_id})
            return res.status(200).json(userCarts)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    },

    async getCart(req, res) {

        const { user_id, cart_id } = req.params

        try {

            const cart = await (await Cart.findById(cart_id))
            return res.status(200).json(cart)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    },

    async deleteCart(req, res) {

        try {
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    }

}

module.exports = cartController
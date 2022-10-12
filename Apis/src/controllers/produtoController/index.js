const Product = require('../../models/Produto')

const ProductController ={

    async createProdutc(req, res) {

        const bodyData = req.body

        try {

            const newProduct = await Product.create({...bodyData})
            return res.status(200).json(newProduct) 
            
        } catch (error) {

            return res.status(400).json(error)
            
        }

    },

    async getProdutcById(req, res) {

        const { product_id } = req.params

        try {

            const productById = await Product.findById(product_id)
            return res.status(200).json(productById)
            
        } catch (error) {

            return res.status(400).json(error)
            
        }

    },

    async deletProduct(req, res) {

        const { product_id } = req.params

        try {

            const deleteProduct = await Product.findByIdAndDelete(product_id)
            return res.status(200).json(updateProduct)
            
        } catch (error) {

            return res.status(400).json(error)
            
        }

    },

    async updateProduct(req, res) {

        const bodyData = req.body
        const { product_id } = req.params

        try {

            const updateProduct = await Product.findByIdAndUpdate(product_id,bodyData)
            return res.status(200).json(updateProduct)
            
        } catch (error) {

            return res.status(400).json(error)
            
        }

    },

    async getProducts(req, res) {

        try {

            const products = await Product.find()
            return res.status(200).json(products)
            
        } catch (error) {

            return res.status(400).json(error)
            
        }

    }

}


module.exports = ProductController
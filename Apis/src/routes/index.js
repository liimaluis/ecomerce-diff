const { Router } = require('express')

const userController = require('../controllers/userController')
const LoginController = require('../controllers/loginController')
const ProductController = require('../controllers/produtoController')
const cartController = require('../controllers/cartController')

const { authenticate } = require('../middlewares')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', userController.creatUser)
routes.get('/users', userController.getUsers)
routes.get('/users/:user_id', userController.getUserById)
routes.delete('/users/:user_id', userController.deleteUserById)

routes.post('/login', LoginController.creatSession) 

routes.post('/products', authenticate, ProductController.createProdutc)
routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProdutcById)
routes.delete('/products/:product_id', authenticate, ProductController.deletProduct)
routes.patch('/products/:product_id', authenticate, ProductController.updateProduct)

routes.post('/carts/:user_id', authenticate, cartController.creatCart)
routes.get('/carts/:user_id', authenticate, cartController.getUsersCarts)
routes.delete('/carts/:user_id/:produto_id', authenticate, cartController.deleteCart)

routes.get('/carts/:user_id/:cart_id', authenticate, cartController.getCart)

module.exports = routes
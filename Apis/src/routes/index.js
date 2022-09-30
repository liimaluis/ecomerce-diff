const { Router } = require('express')

const userController = require('../controllers/userController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', userController.creatUser)
routes.get('/users')

routes.get('/user/:user_id')
routes.put('/users/:user_id')

routes.post('/produto/:user_id')
routes.get('/produto/:user_id')
routes.delete('/produto/:user_id/:produto_id')

routes.get('/produtos')
routes.get('/produto/:produto_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:user_id/:cart_id')

module.exports = routes
const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.delete('/products/:id', ProductController.delete);
routes.put('/products/:id', ProductController.update);
module.exports = routes;
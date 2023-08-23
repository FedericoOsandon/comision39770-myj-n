const { Router } = require('express')
const productsController = require('../controllers/products.controller')

const router = Router()

router.get('/',productsController.getProducts)

router.get('/:pid', productsController.getProduct)

router.post('/', productsController.createProduct)

router.put('/:pid', productsController.updateProduct)

router.delete('/:pid', productsController.deleteProduct)

module.exports = router
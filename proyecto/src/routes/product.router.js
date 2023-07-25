const {Router} =require('express')
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/product.controller.js')


const router =  Router()

// router.get('/',        passportCall('jwt'), authorization('Admin'), getProducts)
router.get('/',        getProducts)
router.get('/:pid',    getProduct)
router.post('/',       createProduct)
router.put('/:pid',    updateProduct)
router.delete('/:pid', deleteProduct)

module.exports = router
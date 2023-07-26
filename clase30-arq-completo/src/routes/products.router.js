const { Router } = require('express')
const {
    getProducts, 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.controller')


const router = Router()

// GET http://localhost:8080/api/proucts/
router.get('/', getProducts)
//GET  http://localhost:8080/api/proucts/:pid
router.get('/:pid', getProduct)
// POST http://localhost:8080/api/proucts/
router.post('/', createProduct)
//PUT  http://localhost:8080/api/proucts/:pid
router.put('/:pid', updateProduct)
//DELETE  http://localhost:8080/api/proucts/:pid
router.delete('/:pid', deleteProduct)


module.exports = router
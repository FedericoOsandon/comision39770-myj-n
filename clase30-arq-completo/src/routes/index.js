const { Router } = require('express')
const productRouter = require('./products.router.js')

const router = Router()
// http://localhost:8080/api/proucts
router.use('/products', productRouter)
// http://localhost:8080/api/users
// router.use('/users')

module.exports = router
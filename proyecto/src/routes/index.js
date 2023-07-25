const { Router } = require('express')
const sessionRouter = require('./session.router.js')
const usersRouter = require('./users.router.js')
const productRouter = require('./product.router.js')
const cartsRouter = require('./cart.router.js')
const pruebasRouter = require('./pruebas.router.js')

const router = Router()

// router.use('/api/session',  sessionRouter.getRouter())
// router.use('/api/users',    usersRouter.getRouter())
router.use('/api/products', productRouter)
router.use('/api/carts', cartsRouter)
router.use('/pruebas',      pruebasRouter)

module.exports = router
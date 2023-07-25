const {Router} = require('express')
const {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
} = require('../controllers/cart.controller')

const router = Router()

router.get('/', getCarts)
router.get('/', getCart)
router.post('/', createCart)
router.put('/', updateCart)
router.delete('/', deleteCart)

module.exports = router
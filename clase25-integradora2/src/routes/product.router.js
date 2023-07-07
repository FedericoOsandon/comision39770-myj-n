const {Router} =require('express')
const { productModel } = require('../managers/models/product.model.js')
const { passportCall } = require('../passport-jwt/passportCall.js')
const { authorization } = require('../passport-jwt/authorizationJwt.js')
const { getProducts } = require('../controllers/producs.controller.js')

const router =  Router()

router.get('/', getProducts)

router.get('/:pid', async (req,res)=>{
    try {
        const {pid} = req.params
        let product = await productModel.findOne({_id: pid})
        res.status(200).send({
            status: 'success',
            payload: product
        })
    } catch (error) {
        console.log(error)
    }
})
router.post('/', passportCall('jwt'), authorization('user_premiun'), async (req,res)=>{
    try {
        const newProduct = req.body

        let result = await productModel.create(newProduct)


        res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
})
router.put('/:pid', (req,res)=>{
    res.status(200).send('Actualizar productos')
})
router.delete('/:pid', (req,res)=>{
    res.status(200).send('Borrar productos')
})

module.exports = router
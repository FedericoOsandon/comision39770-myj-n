import {Router} from 'express'
import { PaymentsService } from '../services/payments.service.js'

const router = Router()

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async (req,res)=>{
    /// solicitar el método de pago a stripe

    // simulación de búsqueda en la base de datos
    const productRequested = products.find(prod => prod.id === Number(req.query.id))

    if(!productRequested){
        return res.status(404).send({status: 'error', error: 'product not found'})
    }

    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'usd',
        metadata: {
            userId: 'id.autogenerado-por.mongo',
            orderDetails: JSON.stringify({
                [productRequested.name]: 2
            }),
            adress: JSON.stringify({
                street: 'Calle de prueba',
                postalCode: '3232',
                externalNumber: '12312313'  
            }, null, '\t')
        }
    }

    const service = new PaymentsService()
    let result = await service.createPaymentIntent(paymentIntentInfo)
    console.log(result)

    res.send({status: 'success', payload: result })
})

export default router
import Stripe from 'stripe'

export class PaymentsService {
    constructor(){
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = await this.stripe.paymentIntents.create(data)
        return paymentIntent
    }
} 
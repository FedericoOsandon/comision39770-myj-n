const {Schema, model} = require('mongoose')

const collection = 'products'

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: Number,
    category: String
})

const productModel = model(collection, productSchema)

module.exports = {
    productModel
}
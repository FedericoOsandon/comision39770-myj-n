const { Schema, model } = require('mongoose')

const collection = 'products'

const productSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: String,
    thumbnail: String,
    price: Number,
    stock: Number
})

const productModel = model(collection, productSchema)

module.exports = { productModel }
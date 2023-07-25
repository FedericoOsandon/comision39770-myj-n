const {Schema, model}  = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2') 

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

productSchema.plugin(mongoosePaginate)
const productModel = model(collection, productSchema)

module.exports = {
    productModel
}


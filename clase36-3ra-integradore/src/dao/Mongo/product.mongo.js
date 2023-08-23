const { productModel } = require("./models/product.model");

class ProductDaoMongo{
    constructor(){
        this.model = productModel
    }

    get = async () => 'get products'
    getBy = async (filter)=> `get By product`
    create = async () => `create product`
    update = async () => `update product`
    delete = async () => `delete product`
}

module.exports = ProductDaoMongo


const { productModel } = require("./models/product.model")

class ProductDaoMongo {
    constructor(){
        this.productModel = productModel
    }
    getProducts = async (limit=5, page=1) => {
        return await this.productModel.paginate({}, {limit, page, lean: true} )
    }
    getProduct = async (pid) => {
        return await this.productModel.findOne({_id: pid})
    }
    createProduct = async () => {
        return await this.productModel.create(newProduct)
    }
    updateProduct = async (pid, updateToProduct) => {
        return await this.productModel.findByIdAndUpdate({_id: pid}, updateToProduct)
    }
    deleteProduct = async (pid) => {
        return await this.productModel.findByIdAndDelete({_id: pid})

    }
}

module.exports =  ProductDaoMongo
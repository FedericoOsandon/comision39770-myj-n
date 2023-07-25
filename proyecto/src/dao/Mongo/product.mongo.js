const { productModel } = require("./models/product.model")

class ProductDaoMongo {
    constructor(){
        this.productModel = productModel
    }
    get = async (limit=5, page=1) => {
        return await this.productModel.paginate({}, {limit, page, lean: true} )
    }
    getById = async (pid) => {
        return await this.productModel.findOne({_id: pid})
    }
    create = async () => {
        return await this.productModel.create(newProduct)
    }
    update = async (pid, updateToProduct) => {
        return await this.productModel.findByIdAndUpdate({_id: pid}, updateToProduct)
    }
    delete = async (pid) => {
        return await this.productModel.findByIdAndDelete({_id: pid})

    }
}

module.exports =  ProductDaoMongo
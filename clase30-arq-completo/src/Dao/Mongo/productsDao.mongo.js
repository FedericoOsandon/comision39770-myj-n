const { productModel } = require("./Models/products.model");


class ProdcutsDaoMongo {
    constructor(){
        this.model = productModel
    }

    async get(){
        return await this.model.find({})
    }
    async getBy(pid){
        return await this.model.findById({_id:pid})
    }
    async create(newProduct){
        return this.model.create(newProduct) 
    }
    update(){}
    delete(){}
}

module.exports = ProdcutsDaoMongo
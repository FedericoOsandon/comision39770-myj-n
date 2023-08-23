class ProducRepository{
    constructor(dao){
        this.dao = dao
    }

    getProducts(){
        return this.dao.get()
    }
    getProduct(pid){
        return this.dao.getBy(pid) 
    }
    createProduct(newProduct){
        return this.dao.create()
    }
    updateProduct(){}
    deleteProduct(){}
}

module.exports = { ProducRepository }
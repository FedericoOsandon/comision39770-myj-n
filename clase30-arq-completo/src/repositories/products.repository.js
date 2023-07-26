class ProductRepository {
    constructor(dao){
        this.dao = dao
    }

    async getProducts(){
        // llamar dto 
        return await this.dao.get()
    }

}

module.exports = ProductRepository
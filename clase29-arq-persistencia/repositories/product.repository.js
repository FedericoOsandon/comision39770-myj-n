class ProductRepository {
    constructor(dao){
        this.dao = dao
    }
    getProducts   = async () => {
        let result = await this.dao.get()
        return result 
    }
    getProduct    = async (pid) => {
        let result = await this.dao.getById()
        return result 
    }
    createProduct = async () => {
        // en el caso de usuario acá viene el dto para persistencia
        let result = await this.dao.create()
        return result 
    }
    updateProduct = async (pid, updateToProduct) => {
        let result = await this.dao.update()
        return result 
    }
    deleteProduct = async (pid) => {
        let result = await this.dao.delete()
        return result 
    }
}

module.exports = ProductRepository
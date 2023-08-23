const { productService } = require("../service")

class ProductsControllers {
    constructor(){
        this.service = productService
    }
    getProducts = (req, res) => {    
        res.send('get products')
    }
    getProduct = (req, res) => {    
        res.send({
            status: 'success',
            payload: pid 
        })
    }
    createProduct = (req, res) => {    
        res.send({
            status: 'success',
            message: 'post product' 
        })
    }
    updateProduct = (req, res) => {    
        res.send({
            status: 'success',
            message: 'update product' 
        })
    }

    deleteProduct = (req, res) => {    
        res.send({
            status: 'success',
            message: 'delete product' 
        })
    }
}

module.exports = new ProductsControllers
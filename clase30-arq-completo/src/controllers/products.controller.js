const { productService } = require('../service/index.js')

class ProductsController {
    constructor(){
        this.productService = productService
    }

    getProducts = async (req,res) => {
        try {
            const proucts = await this.productService.getProducts()
            res.send({
                stauts: 'success', 
                payload: proucts
            })
        } catch (error) {
            console.log(error)
        }
    }
    getProduct = (req, res)=>{
        res.send('get de producto')
    }
    createProduct = (req, res)=>{
        res.send('post de productos')
    } 
    updateProduct = (req, res)=>{
        res.send('put de productos')
    }
    deleteProduct = (req, res)=>{
        res.send('delete de productos')
    }
}




module.exports = new ProductsController()
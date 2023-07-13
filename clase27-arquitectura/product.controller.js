const { productService } = require("../service")

class ProductController {
    constructor(){
        this.productService = productService
    }
    getProducts = async (req,res)=>{
        try {
            const {limit, page} = req.query
            const { 
                docs, 
                hasPrevPage, 
                hasNextPage, 
                prevPage, 
                nextPage , 
                totalDocs} = await this.productService.getProducts(limit, page)
            // const respuesta = await productModel.find({}).lean()
            res.status(200).send({
                status: 'success',
                payload: docs
            })
            
        } catch (error) {
            cconsole.log(error)
        }
    }
    getProduct = async (req,res)=>{
        try {
            const {pid} = req.params
            let product = await this.productService.getProduct(pid)
            res.status(200).send({
                status: 'success',
                payload: product
            })
        } catch (error) {
            console.log(error)
        }
    }
    createProduct = async (req,res)=>{
        try {
            const newProduct = req.body
    
            let result = await this.productService.createProduct(newProduct)
    
    
            res.status(200).send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            console.log(error)
        }
    }
    updateProduct = (req,res)=>{
        res.status(200).send('Actualizar productos')
    }
    deleteProduct = (req,res)=>{
        res.status(200).send('Borrar productos')
    }
}

module.exports = new ProductController()
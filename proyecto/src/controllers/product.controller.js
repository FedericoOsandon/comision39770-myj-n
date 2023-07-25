const { productService } = require("../service")

class ProductController {
    constructor(){
        this.productService = productService
    }
    /* The `getProducts` function is an asynchronous function that handles the logic for retrieving a
    list of products. */
    getProducts = async (req,res)=>{
        try {
            const {limit, page} = req.query
            const { 
                docs, 
                hasPrevPage, 
                hasNextPage, 
                prevPage, 
                nextPage , 
                totalDocs} = await this.productService.get(limit, page)
            // const respuesta = await productModel.find({}).lean()
            res.status(200).send({
                status: 'success',
                payload: docs
            })
            
        } catch (error) {
            cconsole.log(error)
        }
    }
    /* The `getProduct` function is an asynchronous function that handles the logic for retrieving a
    single product. It takes in the `req` (request) and `res` (response) parameters, which are
    objects representing the HTTP request and response, respectively. */
    getProduct = async (req,res)=>{
        try {
            const {pid} = req.params
            let product = await this.productService.getById(pid)
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
    
            let result = await this.productService.create(newProduct)
    
    
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
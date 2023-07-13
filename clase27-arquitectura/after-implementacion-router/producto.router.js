const RouterClass = require("../../../src/routes/router");

class ProductoRouter extends RouterClass {
    init(){
        this.get('/', ['USER'], async (req,res)=>{
            try {
                const { 
                    docs, 
                    hasPrevPage, 
                    hasNextPage, 
                    prevPage, 
                    nextPage , 
                    totalDocs} = await productModel.paginate({}, {limit: 10, page: 1, lean: true} )
                // const respuesta = await productModel.find({}).lean()
                res.status(200).send({
                    status: 'success',
                    payload: docs
                })
                
            } catch (error) {
                cconsole.log(error)
            }
        })
        this.get('/pid', ['PUBLIC'], async (req,res)=>{
            try {
                const {pid} = req.params
                let product = await productModel.findOne({_id: pid})
                res.status(200).send({
                    status: 'success',
                    payload: product
                })
            } catch (error) {
                console.log(error)
            }
        })
        this.post('/', ['USER_PREMIUN'], async (req,res)=>{
            try {
                const newProduct = req.body
        
                let result = await productModel.create(newProduct)
        
        
                res.status(200).send({
                    status: 'success',
                    payload: result
                })
            } catch (error) {
                console.log(error)
            }
        })
        this.put('/:pid', ['USER_PREMIUN'],async (req,res)=>{
            try {
                const {pid} = req.params
                const updateProduct = req.body
                
                const result = await productModel.updateOne({_id: pid}, updateProduct)
                res.status(200).send({
                    status: 'success',
                    payload: result
                })
            } catch (error) {
                console.log(error)
            }
        })
        this.delete('/:pid', ['ADMIN'], async (req,res)=>{
            try {
                const {pid} = req.params
                const result = await productModel.deleteOne({_id: pid})
                res.status(200).send({
                    status: 'success',
                    payload: result
                })
            } catch (error) {
                console.log(error)
            }
        })

    }
}

module.exports = {
    ProductoRouter
}


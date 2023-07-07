exports.getProducts = async (req,res)=>{
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
}
// const { Router } = require('express')
// const { UserModel } = require('../dao/Mongo/models/user.model')

// const router = Router()

// router.get('/',  async (req, res)=>{
//     try {
//         // mongoose - paginate 
//         const {page=1} = req.query
//         // let users = await userModel.paginate({}, {limit: 10, page: page, lean: true})
//         let users = await this.userManager.get()
//         const {docs, hasPrevPage, hasNextPage, prevPage, nextPage, totalPages} = users

//         // if (!docs) {
            
//         // }

//         res.send({
//             status: 'success',
//             users: docs,
//             hasPrevPage,
//             hasNextPage,
//             prevPage,
//             nextPage
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

// router.post('/', async (req, res)=>{
//     try {
//         let user = req.body
//         console.log(user)
//         if(!user.nombre || !user.apellido){ 
//             return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
//         }

//         const newUser = {
//             first_name: user.nombre, 
//             last_name: user.apellido,
//             email: user.email,
//             password: user.password
//         } 
        
//         let result =  await UserModel.create(newUser)

        
//         res
//             // .cookie(
//                 // token: asldjfjasdhflasjdfljasdflasldjf
//             // )
//             .status(200).send({result})
//     } catch (error) {
//         console.log(error)
//     }
    
// })

// router.put('/:uid', async (req, res)=>{
//     try {
//         const {uid} = req.params
//         const updateUser = req.body
//         const result = await UserModel.updateOne({_id: uid}, updateUser)
//         res
            
//             .status(200).send({
//             status: 'success',
//             payload: result 
//         })
//     } catch (error) {
//         console.log(error)
//     }

// })


// router.delete('/:uid', async (req, res)=>{
//     try {
//         const {uid} = req.params
//         const result = await UserModel.deleteOne({_id: uid})
//         res.status(200).send({
//             status: 'success',
//             payload: result
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

// module.exports = router


const { Router } = require('express')
const {
    getUsers, 
    createUsers, 
    updateUsers, 
    deleteUsers
} = require('../controllers/users.controller')

const router = Router()

router.get('/',  async (req, res)=>{
    try {
        // mongoose - paginate 
        const {page=1} = req.query
        // let users = await userModel.paginate({}, {limit: 10, page: page, lean: true})
        let users = await this.userManager.get()
        const {docs, hasPrevPage, hasNextPage, prevPage, nextPage, totalPages} = users

        // if (!docs) {
            
        // }

        res.send({
            status: 'success',
            users: docs,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res)=>{
    try {
        let user = req.body
        console.log(user)
        if(!user.nombre || !user.apellido){ 
            return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
        }

        const newUser = {
            first_name: user.nombre, 
            last_name: user.apellido,
            email: user.email,
            password: user.password
        } 
        
        let result =  await this.userManager.create(newUser) 

        
        res.status(200).send({result})
    } catch (error) {
        console.log(error)
    }
    
})

router.put('/:uid', updateUsers)


router.delete('/:uid', deleteUsers)

module.exports = router


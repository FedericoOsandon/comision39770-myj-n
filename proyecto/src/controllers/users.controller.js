const { UserDTO } = require("../dto/user.dto")
const UserManagerMongo = require("../managers/user.mongo")


class UserController {
    constructor(){
        this.service = new UserManagerMongo() 
    }
    getUsers = async (req, res)=>{
        try {
            // mongoose - paginate 
            const {page=1} = req.query
            // let users = await userModel.paginate({}, {limit: 10, page: page, lean: true})
            let users = await this.service.get()
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
    }
    
    createUsers = async (req, res)=>{
        try {
            let { first_name, apellido, email,  password } = req.body // viene del cliente
            // console.log(user)
            if(!first_name || !apellido || !email, !password) { 
                return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
            }
    
            let newUser = new UserDTO({first_name, apellido, email, password})
            
            let result =  await this.service.create(newUser)// error
    
            
            res.status(200).send({result})
        } catch (error) {
            console.log(error)
        }
        
    }
    
    updateUsers = async (req, res) => {
        const { uid } = req.params
        const user = req.body
    
        // validar pid 
        // if(!id)   
        // validar campos 
        if(!user.nombre || !user.apellido){ 
            return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
        }
       
        let  userToReplace = {
            first_name: user.nombre,
            last_name: user.apellido,
            email: user.email
        }
    
        let result = await this.service.updateOne({_id: uid}, userToReplace)
        
    
        res.send({
            status: 'success',
            payload: result
        })
    }
    
    deleteUsers = async (req, res) => {
        try {
            let {uid} = req.params
            // buscar por pid user
        
            let result = await this.service.deleteOne({_id: uid})
            res.send({status: 'success', payload: result})
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserController()


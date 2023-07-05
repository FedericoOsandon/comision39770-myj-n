const Router = require('./router.js')

class UserRouter extends Router {
    // get(){}
    init(){
       this.get('/', ['PUBLIC'],async (req,res)=>{
            try {
                res.sendSuccess('Hola coder- get user')
                
            } catch (error) {
                res.sendServerError(error)
            }
       }) 
       this.post('/current', ['ADMIN'],async (req,res)=>{
            try {
                let user = {
                    email: 'email',
                    role: 'user'
                }
                res.sendSuccess('Hola coder- post user')
                
            } catch (error) {
                res.sendServerError(error)
            }
       }) 
    }
}

module.exports = new UserRouter()
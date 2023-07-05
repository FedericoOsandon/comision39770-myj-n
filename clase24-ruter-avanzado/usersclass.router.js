const Router = require('./router.js')

class UserRouter extends Router {
    // get(){}
    init(){
       this.get('/', ['PUBLIC'],async (req,res)=>{
            try {
                res.sendSuccess('Hola coder - get user')                
            } catch (error) {
                res.sendServerError(error)
            }
       }) 
       this.get('/currentUser', ['USER_PREMIUN'],async (req,res)=>{
            try {
                res.sendSuccess('Hola coder- get user')                
            } catch (error) {
                res.sendServerError(error)
            }
       }) 
    }
}

module.exports = new UserRouter()
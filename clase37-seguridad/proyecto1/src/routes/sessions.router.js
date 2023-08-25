import { Router } from 'express';

const router = Router();

const users = [];
// no está implementada correctamente la arquitectura
router.post('/register',(req,res)=>{
    const user = req.body
    // nada o cualquier cosa -> registro de nada A04 Insecure Design
    // A04 Insecure Design console.log -> muestra todo lo que viene
    console.log(user);
    
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    // no se encripta la contraseña -> A07 identification and auth
    users.push(user)
    // Devuelve todo los datos -> cliente A04
    res.send({status:"success",payload:user})
})
// cuando instalas todo aparece un MODERATE severity de alguna libreria

export default router;
import { Router } from "express";

const router = Router();
// falta implementar la arquitectura -> A04
router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;
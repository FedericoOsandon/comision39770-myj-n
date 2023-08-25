import { Router } from "express";

const router = Router();
// falta completar la arquitectura
router.get('/',(req,res)=>{
    res.render('register');
})

export default router;
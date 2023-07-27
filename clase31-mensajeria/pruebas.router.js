const { Router } = require('express')
const {fork} = require('child_process')
const { sendMail } = require('../utils/sendMail')
const { sendSms, sendWhatsapp } = require('../utils/sendSms')

const router = Router()



router.get('/mail', async (req,res)=> {
    await sendMail()
    res.send('Email enviado')
})

router.get('/sms', async (req,res)=> {
    await sendSms('Fede', 'Osandón')       
    res.send('SMS enviado')
})
router.get('/chat', async (req,res)=> {  
    await sendWhatsapp('Fede', 'Osandón')    
    res.send('SMS enviado')
})



module.exports = router
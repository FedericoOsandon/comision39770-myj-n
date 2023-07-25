
const { Router } = require('express')

const router = Router()

router.post('/login', (req, res)=> {
    // comprobar en la db si está el usuario
    // jwt - passport
    res
        .cookie('token', valorToken, {
            expires: 111111000000*30*60,
            httpOnly: true
        })
        .send('login')
})
// router.get('/current', auth, authorization ,(req, res)=>{
//     res.send('current')
// })

router.post('/register', (req, res)=> {
    res.send('register')
})
router.post('/logout', (req, res)=> {
    res.send('logout')
})

module.exports = router
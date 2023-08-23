const { Router } = require('express')
const productsRouter = require('./products.router.js')

const router = Router()

router.use('/api/products', productsRouter )

router.get('/email',(req, res) => {
    sendMail('projectodigitalgen@gmail.com', 'CAmbio de pass', '<h1>Prueba Node </h1>')
    res.send('mail enviado');
})

module.exports = router
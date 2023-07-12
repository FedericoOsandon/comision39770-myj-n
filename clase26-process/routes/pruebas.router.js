const { Router } = require('express')
const {fork} = require('child_process')

const router = Router()
function operacionCompleja() {
    let result = 0
    for (let i = 0; i < 9e9; i++) {
        result += i        
    }
    return result
}
router.get('/block', (req,res)=>{
    const result = operacionCompleja()
    res.send(`El resultado es ${result}`)
})

router.get('/noblock', (req,res)=>{
    // console.log(__dirname)
    const child = fork('./src/routes/operacionCompleja.js')
    child.send('Inicia el proceso de cálculo')
    child.on('message', result => {
        // res.send()
        res.send(`El resultado es: ${result}`)
    })
})

router.get('/', (req,res)=>{
    
    res.send(`ruta de prueba para suma`)
})



module.exports = router
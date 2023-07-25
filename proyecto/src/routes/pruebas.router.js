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
    

// expresión regular [a-zA-z1-9] cod.
// %C3%A1 
// router.param('nombre del parámetro', async(req, res, next, valordelparametro)=>{})
router.param('word', async(req, res, next, word)=>{
    if (!word) {
        req.word = null
    } else {
        req.word = word        
    }
    
    next()
})

router.get('/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC&ntilde]+)', (req, res)=>{
    // const {word} = req.params
    
    res.send({
        word: req.word
    })
})
// router.get('/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:numero([0-9]+)', (req, res)=>{
router.get('/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:lenguage([a-z]+)', (req, res)=>{
    const {word} = req.params
    
    res.send({
        word
    })
})
router.post('/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:lenguage([a-z]+)', (req, res)=>{
    const {word} = req.params
    
    res.send({
        word
    })
})
router.put('/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:lenguage([a-z]+)', (req, res)=>{
    const {word} = req.params
    
    res.send({
        word
    })
})


module.exports = router
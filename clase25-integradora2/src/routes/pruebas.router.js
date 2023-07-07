const { Router } = require('express')

const router = Router()

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
const { Router } = require('express')
const toysController = require('../controllers/toys.controller.js')

const router = Router()

router.get('/', toysController.getAllToys)
router.post('/', toysController.createToy)


module.exports = router
const toysService = require('../services/toys.service.js')

class ToysController {
    getAllToys = (req, res) => {
        const toys = toysService.getAllToys()
        res.status(200).json(toys)
    }

    createToy = (req, res) => {
        const toy = req.body
        const newToy = toysService.createToy(toy)
        res.status(201).json(newToy)
    }
}

module.exports = new ToysController()
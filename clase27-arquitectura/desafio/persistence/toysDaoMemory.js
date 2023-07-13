// toyDao.js
let toys = []
let nextId = 1

class ToysDaoMemory { // toyManager.js

    getAllToys = () => {
        return toys
    }
    
    createToy = (toy) => {
        const newToy = { id: nextId, ...toy }
        toys.push(newToy)
        nextId++
        return newToy
    } 
  
}

module.exports = ToysDaoMemory
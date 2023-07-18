const mongoose = require('mongoose')
// get http:// dominio.com 
class MongoSingleton {
    static #instance
    constructor(){
        mongoose.connect('mongodb://localhost:27017/c39770', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }

    static getInstance(){
        if(this.#instance){
            console.log('Already connected')
            return this.#instance
        }

        this.#instance = new MongoSingleton()
        console.log('Connected')
        return this.#instance
    }
}

module.exports = MongoSingleton

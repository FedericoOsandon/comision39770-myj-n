const { connect } = require('mongoose')
const { config } = require('../config/config')
// console.log(config.mongo_url)

class MongoSingleton {
    static #instance
    constructor(){
        connect('mongodb://localhost:27017/c39770', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    static getInstance(){
        if (this.#instance) {
            console.log('Base de dato ya creada')
            return this.#instance
        }

        this.#instance = new MongoSingleton()
        console.log('Base de datos creada')
        return this.#instance
    }
}

module.exports = { MongoSingleton }
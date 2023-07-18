// const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')
const MongoSingleton = require('./MongoSingleton')

// console.log(commander.opts())
const { mode } = commander.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

exports.config = {
    privateKeyJwt: process.env.PRIVATE_KEY_JWT || '',
    PORT: process.env.PORT                     || 8000,
    MONGO_URL: process.env.MONGO_URL           || '',
    connectDB: () => MongoSingleton.getInstance()
    // connectDB: async () => {
    //     try {
    //         await mongoose.connect('mongodb://localhost:27017/c39770')
    //         console.log('base de datos conectada..')
    //     } catch (error) {
    //         console.log('error de connection')
    //     }
    // }
}
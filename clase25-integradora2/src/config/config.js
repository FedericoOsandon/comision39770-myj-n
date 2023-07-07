const mongoose = require('mongoose')

exports.config = {
    privateKeyJwt: 'palabraSecretaCoder',
    connectDB: async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/c39770')
            console.log('base de datos conectada..')
        } catch (error) {
            console.log('error de connection')
        }
    }
}
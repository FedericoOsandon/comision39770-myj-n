/// esquema 
const {Schema, model} = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const collection = 'usuarios'

const userSchema = new Schema({// nomnre 
    username: String,
    first_name: {
        type: String,
        index: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
    }
    // gender: String
})

userSchema.plugin(mongoosePaginate)
const UserModel = model(collection, userSchema)

module.exports = {
    UserModel
}
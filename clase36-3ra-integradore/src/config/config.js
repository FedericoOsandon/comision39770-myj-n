const dotenv = require('dotenv')
const { commander } = require('../utils/commander')
const { MongoSingleton } = require('../utils/singleton')

// console.log('config: ',commander.opts())
const { mode } = commander.opts()
dotenv.config({
    path: mode==='development' ? './.env.development' : './.env.production'
})
console.log(process.env.mongo_url)
exports.config = {
    port:                 process.env.PORT || 4000,
    mongo_url:            process.env.MONGO_URL,
    google_mail_password: process.env.GOOGLE_MAIL_PASSWORD,
    google_mail_user:     process.env.GOOGLE_MAIL_USER,
    persistence:          process.env.PERSISTENCE,
    dbConnection:         async ()=> {return await MongoSingleton.getInstance()}
}
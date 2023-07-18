// const express = require('express')
const express                = require('express')
// const usersRouter         = require('./src/routes/users.router.js') 
const appRouter              = require('./routes')  
const { initializePassport } = require('./utils/passport-jwt/passport.config')
const { config }             = require('./config/config.js')
const passport               = require('passport')
const cors                   = require('cors')

// console.log(config)
const app = express()
config.connectDB()
const PORT = config.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

initializePassport()
app.use(passport.initialize())

app.use(appRouter)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})

const httpServer = app.listen(PORT,err =>{
    if (err)  console.log(err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})

// socket io

// jwt o session 

 

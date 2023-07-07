// const express = require('express')
const express     = require('express')
// const usersRouter = require('./src/routes/users.router.js') 
const sessionRouter = require('./routes/session.router.js') 
const usersRouter = require('./routes/usersclass.router.js') 
const productsRouter = require('./routes/product.router.js') 
const pruebasRouter = require('./routes/pruebas.router.js') 
const { config } = require('./config/config.js')
const { initializePassport } = require('./passport-jwt/passport.config.js')
const passport = require('passport')

const app = express()
config.connectDB()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
initializePassport()
app.use(passport.initialize())

app.use('/api/session',  sessionRouter.getRouter())
app.use('/api/users',    usersRouter.getRouter())
app.use('/api/products', productsRouter)
app.use('/pruebas',     pruebasRouter)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})

const httpServer = app.listen(PORT,err =>{
    if (err)  console.log(err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})

// jwt o session 

 

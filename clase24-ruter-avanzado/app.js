// const express = require('express')
const express     = require('express')
// const usersRouter = require('./src/routes/users.router.js') 
const usersRouter = require('./src/routes/usersclass.router.js') 
const pruebasRouter = require('./src/routes/pruebas.router.js') 
const { config } = require('./src/config/config.js')

const app = express()
config.connectDB()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users',  usersRouter.getRouter())
app.use('/pruebas',  pruebasRouter)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})

const httpServer = app.listen(PORT,err =>{
    if (err)  console.log(err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})



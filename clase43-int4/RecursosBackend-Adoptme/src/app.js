const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/users.router.js' )
const petsRouter = require('./routes/pets.router.js' )
const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')
// nuevas importaciones
const { logger } = require('./config/logger.config.js')
const { addLogger } = require('./middlewars/logger.middlewars.js')
const { swaggerOptions } = require('./config/swagger.config.js')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')
// ____________________-

const cors = require('cors')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb://localhost:27017/a39770`)

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(addLogger)
// aquí obj de config docs swagger

const specs = swaggerJSDoc(swaggerOptions)

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/users',usersRouter) 
app.use('/api/pets',petsRouter) 
app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=> logger.info(`Listening on ${PORT}`) )

// logger
// documentación 
// test
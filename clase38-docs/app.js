import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js'
import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import dotenv from 'dotenv'
// importar lo que instalamos de swagger
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'
import __dirname from './utils/index.js'


dotenv.config()
const app = express()
const PORT = process.env.PORT||4000
const connection = mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cookieParser())
console.log(`${__dirname}/docs/**/*.yaml`)
const swaggerOptions = {
    definition: {
        openapi: '3.0.1', // conjunto de reglass 
        info: {
            title: 'Documentación de app de Adoptame',
            description: 'Api pensada para adopción de mascotas'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}

console.log(swaggerJsDoc.definition)

const specs = swaggerJsDoc(swaggerOptions)
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use('/api/users',usersRouter)
app.use('/api/pets',petsRouter)
app.use('/api/adoptions',adoptionsRouter)
app.use('/api/sessions',sessionsRouter)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

const express = require('express')
const appRouter = require('./routes/index.js')
const { config } = require('./config/config.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

config.connectDB()
// http://localhost:8080/api
app.use('/api', appRouter)
// app.use('/api/users', )

app.listen(PORT, () => {
    console.log('Example app listening on port 8080!')
}) 


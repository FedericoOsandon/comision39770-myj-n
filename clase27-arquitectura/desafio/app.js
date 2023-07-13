const express = require('express')
const usersRouter = require('./routes/users.router')
const toysRouter = require('./routes/toys.router')

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/users', usersRouter)
app.use('/api/toys', toysRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
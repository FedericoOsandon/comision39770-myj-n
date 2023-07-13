const { Router } = require('express')

const router = Router()

app.use('/api/session',  sessionRouter.getRouter())
app.use('/api/users',    usersRouter.getRouter())
app.use('/api/products', productsRouter)
app.use('/pruebas',     pruebasRouter)

module.exports = router
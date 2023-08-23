const express = require('express');
const { config } = require('./config/config');
const { sendMail } = require('./utils/sendMail');
const routerApp = require('./routes')

const app = express()

const PORT = config.port

// config.dbConnection(config.mongo_url)
// config.dbConnection(config.mongo_url)
// config.dbConnection(config.mongo_url)

app.use(express.static('public'));

app.use(routerApp)

app.listen(PORT, () => {
    console.log('Server on port', PORT);
})
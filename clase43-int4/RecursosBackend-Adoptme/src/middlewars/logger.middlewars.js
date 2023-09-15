const { logger } = require("../config/logger.config");

exports.addLogger = (req, res, next)=>{
    req.logger = logger
    req.logger.info(`Metodo: ${req.method} - en ruta: ${req.url} - time: ${new Date().toLocaleString()}`)
    next()
}
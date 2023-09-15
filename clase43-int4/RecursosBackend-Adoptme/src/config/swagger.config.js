const { dirname } = require('node:path')
// console.log(__dirname)
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentació de la app de adoptame',
            description: 'Esta es la docs de la app para adoptar mascotas llamada adoptame'
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}
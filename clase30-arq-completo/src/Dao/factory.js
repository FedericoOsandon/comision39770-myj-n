let ProductDao

switch ('MONGO') {
    case 'MONGO':
        ProductDao = require('./Mongo/productsDao.mongo.js')
        break   
}

module.exports = {
    ProductDao
}
const { config } = require("../config/config.js");


let ProductDao
// console.log(config.persistence)
switch (config.persistence) {
    case 'MONGO':
        config.dbConnection()    
        // ProductDao = await import('./Mongo/product.mongo.js')
        ProductDao = require('./Mongo/product.mongo.js')         
        break;

    default:
        break;
}

module.exports = {
    ProductDao
}
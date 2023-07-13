const ProductDaoMongo = require('../dao/Mongo/product.mongo.js')
// const UserDaoMongo = require('../dao/Mongo/User.mongo.js')
// const CartDaoMongo = require('../dao/Mongo/Cart.mongo.js')

// este archivo es ideal para aplicar el patron repository

const productService = new ProductDaoMongo()
// const productService = new ProductDaoMemory()
// const userService = new UserDaoMongo()
// const cartService = new CartDaoMongo()

module.exports = {
    productService,
    // userService,
    // cartService,
}
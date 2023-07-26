const { ProductDao } = require("../Dao/factory.js");
const ProductRepository = require("../Repositories/products.repository");

const productService = new ProductRepository(new ProductDao())

module.exports = {
    productService
}
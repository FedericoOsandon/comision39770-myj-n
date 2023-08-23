const { ProductDao } = require("../dao/factory");
const { ProducRepository } = require("../repositories/products.repository");

const productService = new ProducRepository(new ProductDao())

module.exports = {
    productService
}
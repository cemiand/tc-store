const { Product, Order, Brand, Category, Review } = require("../db/models");

const productosController = {
  findAll() {
    Product.find({})
      .then(productos => res.send(productos))
      .catch(err => {
        res.status(500).send(err)
      })
  },
  findProduct() {

  },
  createProduct() {

  },
  updateProduct() {

  },
  deleteProduct() {

  }
}

module.exports = productosController
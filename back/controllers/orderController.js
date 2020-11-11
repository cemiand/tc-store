const { Product, Order, Brand, Category, Review } = require("../db/models");

const orderController = {
    findAll(req,res) {
        Order.find({})
          .then(orders => res.send(orders))
          .catch(err => {
            res.status(500).send(err)
          })
      },
      findOrder(req,res) {
        Order.findById(req.params.id)
        .then(order => res.send(order))
        .catch(err => {
          res.status(404).send(err)
        })
      },
      updateOrder(req,res) {
        Product.findByIdAndUpdate(req.params.id, req.body)   // duda con el _id
        .then(product => res.status(201).send(product))
        .catch(err => res.status(500).send(err))
      }
}

module.exports = orderController
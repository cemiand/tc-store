const { Product, User, cartOrder } = require("../db/models");

const cartController = {
  addProduct(req, res) {
    User.findById(req.user._id)
      .populate("cart")
      .populate("product")
      .then((user) => {
        Product.findById(req.body._id).then((product) => {
          let exist = false;
          user.cart.map((order) => {
            if (order.product._id == product._id) {
              console.log("COINCIDE");
              order.quantity = order.quantity + 1;
              exist = true;
            }
          });
          if (!exist) user.cart.push({ product });
          user.save();
          res.status(201).send(user.cart);
        });
      })
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct(req, res) {
    User.findById(req.user._id).then((user) => {
      user.cart = user.cart.filter((order) => {
        order.product._id !== req.body._id;
      });
      user.save();
      res.status(200).send(user.cart);
    });
    res
      .status(200)
      .send(user.cart)
      .catch((err) => res.status(500).send(err));
  },
  updateProduct(req, res) {
    User.findById(req.user._id)
      .then((user) => {
        user.cart.map((order) => {
          if (order.product._id == req.body._id) {
            order.quantity = req.body.quantity;
          }
        });
        user.save();
        res.status(200).send(user.cart);
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = cartController;

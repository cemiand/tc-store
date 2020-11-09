const { Product, User, ProductOrder } = require("../db/models");

const cartController = {
  addProduct(req, res) {
    User.findById(req.user._id)
      .populate("cart")
      .populate("product")
      .then((user) => {
        Product.findById(req.body._id).then((product) => {
          let exist = false;
          console.log(user);

          user.cart.map((order) => {
            if (order.product._id.toString() === product._id.toString()) {
              order.quantity += 1;
              exist = true;
              order.save();
              return res.status(201).send(user);
            }
          });

          if (!exist) {
            ProductOrder.create({ product }).then((order) => {
              user.cart.push(order);
              user.save();
              res.status(201).send(user);
            });
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct(req, res) {
    User.findById(req.user._id)
      .populate("cart")
      .populate("product")
      .then((user) => {
        user.cart.map((order, index) => {
          if (order.product._id.toString() === req.params.id) {
            if (order.quantity > 1) {
              order.quantity -= 1;
              order.save();
              user.save();
              res.status(201).send(user);
            } else {
              order.delete(); // ¿se elimina así ? sino utilizar ProductOrder.deleteOne({ _id: order._id })
              user.cart.splice(index, 1);
              user.save();
              res.status(201).send(user);
            }
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = cartController;

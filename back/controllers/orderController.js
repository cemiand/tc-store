const { Order, User } = require("../db/models");
const EmailCtrl = require("./mailController");

const orderController = {
  findAll(req, res) {
    Order.find({})
      .then((orders) => res.send(orders))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  findOrder(req, res) {
    Order.findById(req.params.id)
      .then((order) => res.send(order))
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  updateOrder(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body)
      .then((order) => res.status(201).send(order))
      .catch((err) => res.status(500).send(err));
  },
  createOrder(req, res) {
    User.findById(req.user._id).then((user) => {
      Order.create({ product: req.body }).then((order) => {
        user.orders.push(order);
        user.save();
        EmailCtrl.sendEmail(req, res);
        res.status(201).send(user);
      });
    });
  },
};

module.exports = orderController;

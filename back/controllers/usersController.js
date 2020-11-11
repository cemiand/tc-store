const { User } = require("../db/models");

const usuariosController = {
  userCreate(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((newUser) => {
        res.status(201).send(newUser);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  userLogin(req, res) {
    User.findById(req.user._id)
      .populate({ path: "cart", populate: { path: 'product' } })
      .then(user =>
        res.status(200).json({
          name: user.name,
          email: user.email,
          id: user.id,
          cart: user.cart,
        }));
  },

  userLogout(req, res) {
    req.logOut();
    res.sendStatus(200);
  },

  userMe(req, res) {
    if (req.isAuthenticated()) {
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id,
      });
    } else {
      res.status(401).end();
    }
  },
  changeAccessLevel(req, res) {
    User.findOneAndUpdate({ email: req.body.email }, { accessLevel: req.body.accessLevel })
      .then((user) => {
        res.send(console.log("user level Updated", user));
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  /*   getAccessLevel(req, res, next) {
      if (req.user.accesLevel !== "admin")
        return res.status(401).send("Acceso no autorizado");
      next();
    }, */


  findAll(req, res) {
    User.find({})
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send(err));
  },
  deleteUser(req, res) {
    console.log("REQ PARAMS DE BACK", req.params)
    User.findOneAndDelete({ email: req.params.email })
      .then((user) => res.status(200).send(console.log("user deleted", user)))
  }
};

module.exports = usuariosController;

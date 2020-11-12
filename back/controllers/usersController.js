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
    User.findById(req.user._id).then((user) =>
      res.status(200).json({
        name: user.name,
        email: user.email,
        id: user.id,
        accessLevel: user.accessLevel
      })
    );
  },

  userLogout(req, res) {
    req.logOut();
    res.sendStatus(200);
  },

  userMe(req, res) {
    if (req.isAuthenticated()) {
      User.findById(req.user._id).then((user) =>
        res.status(200).json({
          name: user.name,
          email: user.email,
          id: user.id,
          accessLevel: user.accessLevel
        })
      );
    } else {
      res.status(401).end();
    }
  },
  changeAccessLevel(req, res) {
    User.findOneAndUpdate(
      { email: req.body.email },
      { accessLevel: req.body.accessLevel }
    )
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
      .populate("cart")
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send(err));
  },
  deleteUser(req, res) {
    console.log("REQ PARAMS DE BACK", req.params);
    User.findOneAndDelete({ email: req.params.email }).then((user) =>
      res.status(200).send(console.log("user deleted", user))
    );
  },
};

module.exports = usuariosController;

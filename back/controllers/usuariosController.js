const { User } = require("../db/models");

const usuariosController = {
  usuarioCreate(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((userCreado) => {
        res.status(201).send(userCreado);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },
  userLogin(req, res) {
    res.status(200).json({
      name: req.user.name,
      email: req.user.email,
      id: req.user.id,
    });
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
    changeAccesLevel(req, res) {
    User.findOneAndUpdate(req.body.email, req.body)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  findAll(req, res) {
    User.find({})
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  deleteUser (req, res) {
    User.deleteOne({email: req.body.email})
    .then(() => res.status(200).send(console.log("Usuario eliminado")))
    //.then(()=> res.redirect("http://localhost:1337/"))
  }
};

module.exports = usuariosController;

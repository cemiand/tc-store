const { User } = require("../db/models/User")

const usuariosController = {
  usuarioCreate(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(userCreado => {
        res.status(201).send(userCreado)
      })
      .catch(error => {
        res.status(404).send(error)
      })
  },
  userMe(req, res) {
    if (req.isAuthenticated()) {
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      })
    } else {
      res.status(401).end()
    }
  }

}

module.exports = usuariosController
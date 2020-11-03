const { Usuario } = require("../db/models")

const usuariosController = {
  UsuarioCreate(req, res) {
    Usuario.create({
      nombre: req.body.nombre,
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

}

module.exports = usuariosController
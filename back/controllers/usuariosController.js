const { User } = require("../db/models/User")

const usuariosController = {
  UsuarioCreate(req, res) {
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
  userLogin(req, res){
    res.status(200).json({
      name : req.user.name,
      email : req.user.email,
      _id : req.user.id,
    })
  },
  userLogout(req,res){
    req.logOut();
    res.sendStatus(200)
  },
  

}

module.exports = usuariosController
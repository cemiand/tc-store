const router = require("express").Router();
const usuariosController = require("../controllers/usuariosController")



router.post("/register", usuariosController.UsuarioCreate)


module.exports = router;
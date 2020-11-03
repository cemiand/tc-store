const router = require("express").Router();
const usuariosController = require("../controllers/usuariosController")



router.post("/register", usuariosController.UsuarioCreate)
router.post("/login", passport.authenticate("local"),usuariosController.userLogin )
router.post("/logout", usuariosController.userLogout)


module.exports = router;



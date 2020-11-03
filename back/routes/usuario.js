const router = require("express").Router();
const usuariosController = require("../controllers/usuariosController")
const passport = require("passport")



router.post("/register", usuariosController.usuarioCreate)
router.post("/login", passport.authenticate("local"),usuariosController.userLogin )
router.post("/logout", usuariosController.userLogout)
router.get("/me", usuariosController.userMe)

module.exports = router;



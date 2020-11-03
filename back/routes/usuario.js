const router = require("express").Router();
const usuariosController = require("../controllers/usuariosController")



router.post("/register", usuariosController.usuarioCreate)
router.get("/me", usuariosController.userMe)


module.exports = router;
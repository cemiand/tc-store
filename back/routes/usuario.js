const router = require("express").Router();
const { usuarioCreate, accesLevel, changeAccesLevel } = require("../controllers/usuariosController")


router.post("/register", usuarioCreate)

router.put("/:id", accesLevel, changeAccesLevel)
module.exports = router;



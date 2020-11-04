const router = require("express").Router();
const { usuarioCreate, accesLevel, changeAccesLevel, findAll } = require("../controllers/usuariosController")


router.route("/")
  .post(usuarioCreate)
  .get(findAll)

router.route("/:id")
  .put(accesLevel, changeAccesLevel)

module.exports = router;

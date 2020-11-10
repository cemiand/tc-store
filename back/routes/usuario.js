const router = require("express").Router();
const { usuarioCreate, changeAccesLevel, findAll, deleteUser } = require("../controllers/usuariosController")
const {authRole} = require("./admin")

//AGREGAR DE NUEVO AUTH
router.route("/")
  .post(usuarioCreate)
  .get(findAll)
  .put(authRole("admin"),changeAccesLevel)

router.route("/:email")
  .delete(authRole("admin"),deleteUser)

 
module.exports = router;

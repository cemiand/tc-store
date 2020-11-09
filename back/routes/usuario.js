const router = require("express").Router();
const { usuarioCreate, changeAccesLevel, findAll, deleteUser } = require("../controllers/usuariosController")
const {authRole} = require("./admin")


router.route("/")
  .post(usuarioCreate)
  .get(findAll)
  .put(authRole("admin"), changeAccesLevel)
  .delete(authRole("admin"), deleteUser)

 
module.exports = router;

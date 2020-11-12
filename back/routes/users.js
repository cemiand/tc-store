const router = require("express").Router();
const { deleteUser, userCreate, getAccessLevel, changeAccessLevel, findAll } = require("../controllers/usersController");
const { authRole } = require("./admin")

//agregar el authRole authRole("admin")
router.route("/")
  .post(authRole("admin"), userCreate)
  .get(findAll)
  .put(authRole("admin"), changeAccessLevel)

router.route("/:email")
  .delete(authRole("admin"), deleteUser)

module.exports = router;


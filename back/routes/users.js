const router = require("express").Router();
const { deleteUser, userCreate, getAccessLevel, changeAccessLevel, findAll } = require("../controllers/usersController");
const { authRole } = require("./admin")

//agregar el authRole authRole("admin")
router.route("/")
  .post(userCreate)
  .get(findAll)
  .put(changeAccessLevel)

router.route("/:email")
  .delete(deleteUser)

module.exports = router;


const router = require("express").Router();
const {
  deleteUser,
  userCreate,
  changeAccessLevel,
  findAll,
} = require("../controllers/usersController");
const { authRole } = require("./admin");

//agregar el authRole authRole("admin")
router
  .route("/")
  .post(userCreate)
  .get(authRole("admin"), findAll)
  .put(authRole("admin"), changeAccessLevel);

router.route("/:email").delete(authRole("admin"), deleteUser);

module.exports = router;

const router = require("express").Router();
const {
  userCreate,
  getAccessLevel,
  changeAccessLevel,
  findAll,
} = require("../controllers/usersController");

router.route("/").post(userCreate).get(findAll);

router.route("/:id").put(getAccessLevel, changeAccessLevel);

module.exports = router;

const router = require("express").Router();
const { findOrder, findAll, updateOrder } = require("../controllers/orderController")
const { authRole } = require("./admin")
//agregar el atuhRole authRole("admin")
router.route("/")
  .get(findAll)


router.route("/:id")
  .get(findOrder)
  .put(updateOrder)

module.exports = router;

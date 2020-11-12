const router = require("express").Router();
const {
  findOrder,
  findAll,
  updateOrder,
  createOrder,
} = require("../controllers/orderController");

const { authRole } = require("./admin");
//agregar el atuhRole authRole("admin")
router.route("/").get(findAll).post(createOrder);

router.route("/:id").get(findOrder).put(updateOrder);

module.exports = router;

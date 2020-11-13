const router = require("express").Router();
const {
  findOrder,
  findAll,
  updateOrder,
  createOrder,
  findUserOrders,
} = require("../controllers/orderController");

const { authRole } = require("./admin");
//agregar el atuhRole authRole("admin")
router.route("/").get(findAll).post(createOrder);

router.route("/:id").get(findOrder).put(authRole("admin"), updateOrder);

router.route("/user", findUserOrders);

module.exports = router;

const router = require("express").Router();
const { findOrder, findAll, updateOrder } = require("../controllers/orderController")
const {authRole} = require("./admin")


router.route("/")
  .get(findAll)
  

router.route("/:id")
    .get(findOrder)
    .put(authRole("admin"), updateOrder)
 
module.exports = router;

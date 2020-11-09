const router = require("express").Router();
const { findAll, findProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productosController")
const {authRole} = require("./admin")

router.route("/") //all products
  .get(findAll)
  .post(authRole("admin"), createProduct)

router.route("/:id") //individual product
  .get(findProduct)
  .put(authRole("admin"), updateProduct)
  .delete(authRole("admin"), deleteProduct)


module.exports = router;




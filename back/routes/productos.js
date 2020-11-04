const router = require("express").Router();
const { findAll, findProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productosController")

router.route("/") //all products
  .get(findAll)
  .post(createProduct)

router.route("/:id") //individual product
  .get(findProduct)
  .put(updateProduct)
  .delete(deleteProduct)


module.exports = router;




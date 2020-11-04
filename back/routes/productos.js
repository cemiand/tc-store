const router = require("express").Router();
const { findAll, findProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productosController")

router.route("/") //all products
  .get(findAll)

router.route("/:id") //individual product
  .get(findProduct)
  .post(createProduct)
  .put(updateProduct)
  .delete(deleteProduct)



module.exports = router;


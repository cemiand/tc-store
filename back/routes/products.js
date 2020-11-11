const router = require("express").Router();
const { findAll, findProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productsController");
const { authRole } = require("./admin")
//agregar el authRole
router
  .route("/") //all products
  .get(findAll)
  .post(createProduct);

router
  .route("/:id") //individual product
  .get(findProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;

const router = require("express").Router();
const { addProduct, deleteProduct } = require("../controllers/cartController");

router.route("/add").post(addProduct);

router.route("/delete/:id").delete(deleteProduct);

module.exports = router;

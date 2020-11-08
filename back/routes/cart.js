const router = require("express").Router()
const {addProduct,deleteProduct,updateProduct,showCart} = require("../controllers/cartController")

// UPDATED 8/11

router.route("/")
    .get(showCart)

router.route("/add")
    .post(addProduct)

router.route("/delete/:id")
    .delete(deleteProduct)

router.route("/update/:id")
    .put(updateProduct)

module.exports =  router;
 
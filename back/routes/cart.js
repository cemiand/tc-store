const router = require("express").Router()
const {addProduct,deleteProduct,updateProduct} = require("../controllers/cartController")


router.route("/")
    .post(addProduct)
    .delete(deleteProduct)
    .put(updateProduct)




module.exports =  router;

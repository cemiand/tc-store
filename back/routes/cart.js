const router = require("express").Router()


router.route("/")
    .post(addProduct)
    .delete(deleteProduct)
    .put(updateProduct)




module.exports =  router;

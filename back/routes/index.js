const router = require("express").Router();

router.use("/users", require("./usuario"))
router.use("/auth", require("./auth"))
router.use("/products", require("./productos"))
router.use("/cart", require("./cart"))
router.use("/reviews", require("./reviews"))
router.use("/categories", require("./categories"))
//RECORDAR CREAR MIDDLEWARE PARA CARRRITO DE COMPRA


module.exports = router;


const router = require("express").Router();

router.use("/users", require("./usuario"))
router.use("/auth", require("./auth"))
router.use("/products", require("./productos"))
router.use("/cart", require("./cart"))
//RECORDAR CREAR MIDDLEWARE PARA CARRRITO DE COMPRA


module.exports = router;


const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/auth", require("./auth"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart"));
router.use("/reviews", require("./reviews"));
//RECORDAR CREAR MIDDLEWARE PARA CARRRITO DE COMPRA

module.exports = router;

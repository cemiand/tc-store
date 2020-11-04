const router = require("express").Router();

router.use("/users", require("./usuario"))
router.use("/auth", require("./auth"))
router.use("/products", require("./productos"))

module.exports = router;


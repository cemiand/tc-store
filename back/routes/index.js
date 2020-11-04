const router = require("express").Router();

router.use("/users", require("./usuario"))
router.use("/auth", require("./auth"))


module.exports = router;

//localhost:3000/user
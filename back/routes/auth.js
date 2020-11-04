const router = require("express").Router();
const passport = require("passport")
const { userLogin, userLogout, userMe } = require("../controllers/usuariosController")

router.post("/login", passport.authenticate("local"), userLogin)
router.post("/logout", userLogout)
router.get("/me", userMe)

module.exports = router
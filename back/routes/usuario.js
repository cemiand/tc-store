const router = require("express").Router();
const { usuarioCreate, userLogin, userLogout, userMe, accesLevel, changeAccesLevel } = require("../controllers/usuariosController")
const passport = require("passport")

router.post("/register", usuarioCreate)
router.post("/login", passport.authenticate("local"), userLogin)
router.post("/logout", userLogout)
router.get("/me", userMe)
router.put("/:id", accesLevel, changeAccesLevel)
module.exports = router;



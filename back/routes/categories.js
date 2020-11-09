 const router = require("express").Router()
const authRole = require("./admin")
const { findAll, createCategory, updateCategory, deleteCategory } = require("../controllers/categoriesController")


router.route("/")
    .get(authRole("admin"), findAll)
    .post(authRole("admin"), createCategory)
    .delete(authRole("admin") ,deleteCategory)
    .put(authRole("admin"), updateCategory)

module.exports = router; 
const router = require("express").Router()
const { authRole } = require("./admin")
const { findAll, createCategory, updateCategory, deleteCategory } = require("../controllers/categoriesController")

//Agregar el authRole authRole("admin")

router.route("/")
    .get(findAll)
    .post(createCategory)
    .delete(deleteCategory)
    .put(updateCategory)

module.exports = router; 
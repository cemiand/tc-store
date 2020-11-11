const router = require("express").Router();
const {findCategories,createCategories,deleteCategories} = require("../controllers/categoriesController")


router.route("/")
.get(findCategories)
.post(createCategories)

router.route("/:id")
.delete(deleteCategories)
// .get()



module.exports = router;
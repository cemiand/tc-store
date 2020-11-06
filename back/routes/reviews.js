const router = require("express").Router();
const {createReview} = require("../controllers/reviewsContoller")


router.route("/")
.post(createReview)


module.exports = router;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: String,
    ref:"user",
    require: true,
  },
  rating: {
    type: Number,
    min:1,
    max:10,
  },
  description: {
    type: String,
    require: true,
  },
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;

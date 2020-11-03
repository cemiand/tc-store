const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        ref: "brand",
        require: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: Text,
        require: true,
    }

})

const Review = mongoose.model("review", reviewSchema)
module.exports = Review;
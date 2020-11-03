const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    brand: {
        type: Schema.Types.String,
        ref: "brand",
        require: true
    },
    categories: [{
        type: Schema.Types.String,
        ref: "category"
    }],
    price: {
        type: Number,
        ref: "order",
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "review"
    }],
    description: {
        type: Text,
        require: true,
    }

})

const Product = mongoose.model("product", productSchema)
module.exports = Product;
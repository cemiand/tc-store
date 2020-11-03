const mongoose = require("mongoose")
const Schema = mongoose.Schema

const brandSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
})

const Brand = mongoose.model("brand", brandSchema)
module.exports = Brand;
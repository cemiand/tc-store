const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;

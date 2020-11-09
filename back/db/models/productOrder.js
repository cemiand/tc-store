const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productOrderSchema = new Schema({
  quantity: { type: Number, required: true, default: 1 },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
});

const productOrder = mongoose.model("productOrder", productOrderSchema);
module.exports = productOrder;

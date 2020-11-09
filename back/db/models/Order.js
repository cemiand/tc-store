const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    require: true,
  },
  state: {
    type: String,
    enum: ["Confirmado", "En Camino", "Entregado", "Reclamo en proceso"],
    default: "Confirmado",
  },
  products: [
    {
      type: Schema.Types.String,
      ref: "productOrder",
    },
  ],
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;

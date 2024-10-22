const mongoose = require("mongoose");

const oderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payment:{ type: Boolean, default:false}
});

const orderModel = mongoose.model("order", oderSchema);

module.exports = orderModel;

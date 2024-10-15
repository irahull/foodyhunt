const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  // date: { type: Date, default: Date.now() },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;

const foodModel = require("../models/foodSchema");

const home = async (req, res) => {
  res.send("hey");
};

const addFood = async (req, res) => {
  let img_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: img_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(201).json({ message: "Food added successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { home, addFood };

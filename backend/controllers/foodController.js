const foodModel = require("../models/foodSchema");
const fs = require("fs");

const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  let img_filename = `${req.file.filename}`;

  try {
    const food = new foodModel({
      name,
      description,
      price: parseInt(price),
      image: img_filename,
      category,
    });
    await food.save();
    res.status(201).json({ message: "Food added successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ data: foods, success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.json({ message: "Food deleted successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { foodList, addFood, deleteFood };

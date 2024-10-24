// const foodModel = require("../models/foodSchema");
const User = require("../models/userSchema");

// --------------------- addToCart
const addToCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    const updatedCart = await User.findByIdAndUpdate(req.userId, {
      cartData,
    });

    if (updatedCart) {
      res.json({
        message: "Item added to cart successfully",
        success: true,
        cartData: updatedCart,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// --------------- removeFromCart
const removeFromCart = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    const updatedCart = await User.findByIdAndUpdate(req.userId, {
      cartData,
    });

    if (updatedCart) {
      res.json({
        message: "Item removed from cart successfully",
        success: true,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// ------------ All cart Item
const allCartItem = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.userId });
    let cartData = await userData.cartData;
    console.log(cartData);
    res.json({ cartData, success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { addToCart, removeFromCart, allCartItem };

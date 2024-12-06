const orderModel = require("../models/orderSchema");
const User = require("../models/userSchema");
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_API_KEY);

const placeOrder = async (req, res) => {
  const userId = req.userId;
  const { items, amount, address } = req.body;
  try {
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((lineItem) => ({
      priceData: {
        currency: "usd",
        product_data: {
          name: lineItem.name,
        },
        amount: lineItem.price * 100,
      },
      quantity: lineItem.quantity,
    }));

    line_items.push({
      priceData: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        amount: 2 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${process.env.FRONTEND_URL}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(201).json({ session_url: session.url, success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = { placeOrder };

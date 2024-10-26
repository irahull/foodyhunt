const {
  addToCart,
  removeFromCart,
  allCartItem,
} = require("../controllers/cartController");
const authMiddleware = require("../middleware/auth");

const router = require("express").Router();

router.route("/add").post(authMiddleware, addToCart);
router.route("/remove").post(authMiddleware, removeFromCart);
router.route("/get").post(authMiddleware, allCartItem);

module.exports = router;

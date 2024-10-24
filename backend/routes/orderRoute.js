const { placeOrder } = require("../controllers/orderController");
const authMiddleware = require("../middleware/auth");

const router = require("express").Router();

router.route("/place").post(authMiddleware, placeOrder);

module.exports = router;

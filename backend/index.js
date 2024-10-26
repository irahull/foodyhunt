const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const dbConnection = require("./database/dbConnection");
const authRoute = require("./routes/authRoute");
const foodRoute = require("./routes/foodRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

// _________________________Middleware______________________________
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection();
app.use("/api/auth", authRoute);
app.use("/api/food", foodRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

// Serve static image files from the "uploads" directory
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

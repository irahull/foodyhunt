const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const dbConnection = require("./database/dbConnection");
const authRoute = require("./routes/authRoute");
const foodRoute = require("./routes/foodRoute");


// _________________________Middleware______________________________
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection();
app.use("/api/auth", authRoute);
app.use("/api/food", foodRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

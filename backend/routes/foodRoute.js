const router = require("express").Router();
const {
  addFood,
  foodList,
  deleteFood,
} = require("../controllers/foodController");
const upload = require("../middleware/fileUpload");

router.route("/foodList").get(foodList);
router.post("/add", upload.single("image"), addFood);
router.post("/delete", deleteFood);

module.exports = router;

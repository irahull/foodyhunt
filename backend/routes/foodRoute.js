const router = require("express").Router();
const {
  addFood,
  foodList,
  deleteFood,
} = require("../controllers/foodController");
const upload = require("../middleware/fileUpload");

router.get("/list",foodList);
router.post("/add", upload.single("image"), addFood);
router.post("/delete", deleteFood);

module.exports = router;

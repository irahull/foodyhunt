const router = require("express").Router();
const { addFood, home } = require("../controllers/foodController");
const upload = require("../middleware/fileUpload");

// router.route("/add").post( upload.single("image"), addFood)
router.route("/").get(home);
router.post("/add", upload.single("image"), addFood);

module.exports = router;

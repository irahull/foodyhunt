const router = require("express").Router();
const { home, register, login, profile } = require("../controllers/authController");

router.route("/").get(home)
// router.route("/profile").post(profile)
router.route("/register").post(register)
router.route("/login").post(login)

module.exports=router;

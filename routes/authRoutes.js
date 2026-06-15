const express = require("express");
const router = express.Router();
const protect =
require("../middleware/authMiddleware");

const {
  register,
  verifyOtp,
  login,
  verifyLoginOtp,
  getProfile
} = require("../controllers/authController");

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post(
  "/verify-login-otp",
  verifyLoginOtp
);


router.get("/profile", protect, getProfile);

module.exports = router;    
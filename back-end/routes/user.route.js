const express = require("express");

// config
const router = express.Router();

// controller
const {
  authUser,
  registerUser,
  getUserProfile,
} = require("../controllers/user.controller");

// middleware
const { protect } = require("../middleware/auth.middleware");

// routes
router.post("/users/login", authUser);
router.post("/users", registerUser);
router.route("/users/profile").get(protect, getUserProfile);

// export
module.exports = router;

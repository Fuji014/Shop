const express = require("express");

// config
const router = express.Router();

// controller
const { authUser, getUserProfile } = require("../controllers/user.controller");

// middleware
const { protect } = require("../middleware/auth.middleware");

// routes
router.post("/users/login", authUser);
router.route("/users/profile").get(protect, getUserProfile);

// export
module.exports = router;

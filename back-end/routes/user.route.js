const express = require("express");

// config
const router = express.Router();

// controller
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} = require("../controllers/user.controller");

// middleware
const { protect, admin } = require("../middleware/auth.middleware");

router.post("/users/login", authUser);
router.route("/users").post(registerUser).get(protect, admin, getUsers);
router
  .route("/users/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/users/:id").delete(protect, admin, deleteUser);

// export
module.exports = router;

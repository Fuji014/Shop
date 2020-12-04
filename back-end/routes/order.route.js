const express = require("express");

// config
const router = express.Router();

// controllers
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/order.controller");

// middleware
const { protect } = require("../middleware/auth.middleware");

router.route("/orders").post(protect, addOrderItems);
router.route("/orders/:id").get(protect, getOrderById);
router.route("/orders/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;

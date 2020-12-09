const express = require("express");

// config
const router = express.Router();

// controllers
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require("../controllers/order.controller");

// middleware
const { protect, admin } = require("../middleware/auth.middleware");

router
  .route("/orders")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);
router.route("/orders/myorders").get(protect, getMyOrders);
router.route("/orders/:id").get(protect, getOrderById);
router.route("/orders/:id/pay").put(protect, updateOrderToPaid);
router.route("/orders/:id/deliver").put(protect, admin, updateOrderToDelivered);

module.exports = router;

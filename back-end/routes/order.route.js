const express = require("express");

// config
const router = express.Router();

// controllers
const { addOrderItems } = require("../controllers/order.conteroller");

// middleware
const { protect } = require("../middleware/auth.middleware");

router.route("/orders").post(protect, addOrderItems);

router.module.exports = router;

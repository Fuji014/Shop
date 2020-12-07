const express = require("express");
const { get } = require("mongoose");

// config
const router = express.Router();

//controller
const {
  getProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/product.controller.");

// middleware
const { protect, admin } = require("../middleware/auth.middleware");

// routes
router.get("/products", getProducts);
router
  .route("/products/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct);

// export
module.exports = router;

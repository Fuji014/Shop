const express = require("express");
const { get } = require("mongoose");

// config
const router = express.Router();

//controller
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/product.controller.");

// middleware
const { protect, admin } = require("../middleware/auth.middleware");

// routes
router.route("/products").get(getProducts).post(protect, admin, createProduct);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.get("/products/top", getTopProducts);
router
  .route("/products/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

// export
module.exports = router;

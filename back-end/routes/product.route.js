const express = require("express");

// config
const router = express.Router();

//controller
const {
  getProducts,
  getProduct,
} = require("../controllers/product.controller.");

// routes
router.get("/products", getProducts);
router.get("/products/:id", getProduct);

// export
module.exports = router;

const express = require("express");

// config
const router = express.Router();

const { getProducts, getProduct } = require("../controllers/product");

router.get("/products", getProducts);
router.get("/products/:id", getProduct);

module.exports = router;

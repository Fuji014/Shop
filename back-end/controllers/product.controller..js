const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// @desc  Fetch all products
// @route GET /api/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @desc  Fetch single product
// @route GET /api/products/:id
// @access  Public
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc  Delete product
// @route DELETE /api/products/:id
// @access  Private/Admin
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

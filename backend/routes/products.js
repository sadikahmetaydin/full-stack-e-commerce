const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Create new product
router.post("/", async (req, res) => {
  try {

    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {

    const prodcuts = await Product.find();
    res.status(200).json(prodcuts);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get one product
router.get("/:productId", async (req, res) => {
  try {

    const productId = req.params.productId;

    try {
      const product = await Product.findById(productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: "Product not found!" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Update product
router.put("/:productId", async (req, res) => {
  try {

    const productId = req.params.productId;
    const updates = req.body;
    const existingProduct = await Product.findById(productId);
    if(!existingProduct) return res.status(404).json({ error: "Product not found!" });
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    res.status(200).json(updatedProduct);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
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
})

module.exports = router;
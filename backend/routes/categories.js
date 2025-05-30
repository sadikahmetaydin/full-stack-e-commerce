const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

// Get all category
router.get("/", async (req, res) => {
  try {
    
    const categories = await Category.find();
    res.status(200).json(categories);

  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

// Create a new category
router.post("/", async (req, res) => {
  try {
    
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get one category
router.get("/:categoryId", async (req, res) => {
 try {
  
  const categoryId = req.params.categoryId;
  
  try {
    const category = await Category.findById(categoryId);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: "Category not found." });
  }
  

 } catch (error) {
  res.status(500).json({ error: "Server error." });
 }
});

// Update category
router.put("/:categoryId", async (req, res) => {
  try {

    const categoryId = req.params.categoryId;
    const updates = req.body;
    const existingCategory = await Category.findById(categoryId);
    if(!existingCategory) return res.status(404).json({ error: "Category not found." });
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, { new: true });
    res.status(200).json(updatedCategory);
    
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

// Delete category
router.delete("/:categoryId", async (req, res) => {
  try {

    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) return res.status(404).json({ error: "Category not found." });
    res.status(200).json(deletedCategory);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;

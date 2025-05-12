const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

router.get("/", async (req, res) => {
  res.send("Get all categories");
});

router.post("/", async (req, res) => {
  try {
    
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);

  } catch (error) {
    console.log(error);
  }
})

module.exports = router;

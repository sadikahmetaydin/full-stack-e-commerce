const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

// Create user
router.post("/register", async (req, res) => {
  try {
    
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(400).json({ error: "Email address is already registered!" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
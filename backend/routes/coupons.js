const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Create a new coupon
router.post("/", async (req, res) => {
  try {

    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) return res.status(400).json({ error: "Please can not use same coupon code!" });
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.status(200).json(newCoupon);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get all coupons
router.get("/", async (req, res) => {
  try {

    const coupons = await Coupon.find();
    res.status(200).json(coupons);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get one coupon with id
router.get("/:couponId", async (req, res) => {
  try {

    const couponId = req.params.couponId;
    const coupon = await Coupon.findById(couponId);
    if(!coupon) return res.status(404).json({ error: "Coupon not found!" });
    res.status(200).json(coupon);
    
  } catch (error) {
   console.log(error);
   res.status(500).json({ error: "Server error." }); 
  }
});

// Get one coupon with code
router.get("/code/:couponCode", async (req, res) => {
  try {

    const couponCode = req.params.couponCode;
    const coupon = await Coupon.findOne({ code: couponCode });
    if (!coupon) return res.status(404).json({ error: "Coupon not found!" });
    const { discountPercent } = coupon;
    res.status(200).json({ discountPercent });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})

module.exports = router;
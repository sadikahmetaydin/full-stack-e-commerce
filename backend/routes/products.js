const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all products");
});

module.exports = router;
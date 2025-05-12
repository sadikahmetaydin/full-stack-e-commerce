const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all categories");
});

module.exports = router;

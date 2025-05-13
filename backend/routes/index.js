const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productRoute = require("./products.js");

router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);

module.exports = router;

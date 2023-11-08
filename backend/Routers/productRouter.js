const express = require("express");
const { productController } = require("./Controller/productController");
const { route } = require("./loginRouter");

const router = express.Router();

router.post("/", productController);

module.exports = router;

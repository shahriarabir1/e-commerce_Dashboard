const express = require("express");
const { productController } = require("./Controller/productController");
const { ProductListController } = require("./Controller/productController");
const { ProductDeleteController } = require("./Controller/productController");
const { ProductDelete } = require("./Controller/productController");
const { ProductUpdate } = require("./Controller/productController");
const { ProductGet } = require("./Controller/productController");

const router = express.Router();

router.post("/", productController);
router.get("/", ProductListController);
router.delete("/", ProductDeleteController);
router.delete("/:id", ProductDelete);
router.get("/:id", ProductGet);
router.put('/:id',ProductUpdate)
module.exports = router;

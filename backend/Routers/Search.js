const express = require("express");
const { SearchController } = require("./Controller/SearchController");
const { verifyToken } = require("./Controller/VerifyToken");
const router = express.Router();

router.get("/:key", verifyToken, SearchController);

module.exports = router;

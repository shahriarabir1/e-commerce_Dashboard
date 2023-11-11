const express = require("express");
const { SearchController } = require("./Controller/SearchController");
const router = express.Router();

router.get("/:key", SearchController);

module.exports = router;

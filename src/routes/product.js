const express = require("express");
const router = express.Router();
const controller = require("../controller/product");

router.get("/", controller.get);

module.exports = router;

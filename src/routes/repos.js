const express = require("express");
const router = express.Router();
const controller = require("../controller/repos");

router.get("/fiveOldestCSharpRepos", controller.getRepos);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

router.get("/", controller.getAllUsers);
//router.post("/", controller.addUser);
router.put("/:id", controller.editUser);
router.delete("/:id", controller.deleteUser);
router.delete("/virtual/:id", controller.virtualDeleteUser);

module.exports = router;

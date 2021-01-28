const express = require("express");
const router = express.Router();
const controller = require("../controller/product");

router.get("/", controller.getAllProducts);
router.post("/", controller.addProduct);
router.put("/:id", controller.editProduct);
router.delete("/:id", controller.deleteProduct);
router.delete("/virtual/:id", controller.virtualDeleteProduct);

module.exports = router;

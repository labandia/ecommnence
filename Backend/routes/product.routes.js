const express = require("express");
const router = express.Router();
const prodController = require("../controller/prod.controller");

router.get("/getproduct", prodController.productController);
router.get("/getcategory", prodController.categoryController);

module.exports = router;

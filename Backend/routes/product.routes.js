const express = require("express");
const router = express.Router();
const prodController = require("../controller/prod.controller");

router.get("/getproduct", prodController.productController);
router.get("/getcategory", prodController.categoryController);
router.get("/getcategory/:id", prodController.categoryByNameController);
router.get("/favorites", prodController.favoriteController);
router.get("/favor/:id", prodController.favoriteOnlyforuserController);
router.post("/addfavorites", prodController.updatefavoriteController);
router.post("/delfavorites", prodController.deletefavoriteController);
router.post("/payments", prodController.paidController);

module.exports = router;

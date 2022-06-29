const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.post("/regist", authController.registerController);

router.post("/login", authController.loginController);

router.get("/info/:id", authController.userinfoController);

router.get("/refresh", authController.refreshTokenController);

module.exports = router;

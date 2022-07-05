const express = require("express");
const router = express.Router();
const authRouter = require("./auth.routes");
const prodRouter = require("./product.routes");

router.use("/", authRouter);
router.use('/images', express.static('public/images'));
router.use("/prod", prodRouter);

module.exports = router;

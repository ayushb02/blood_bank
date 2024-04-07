// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const bloodRouter = require("./blood");

const router = express.Router();



router.use("/user", userRouter);
router.use("/blood", bloodRouter);

module.exports = router;
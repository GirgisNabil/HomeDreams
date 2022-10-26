const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel");
const validator = require("../middlewares/userMiddlewareValidator");
const userController = require("../controllers/userControllerDB");

userRouter.post("/", validator, userController.Register);

module.exports = userRouter;

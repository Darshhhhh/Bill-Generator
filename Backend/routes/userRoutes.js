const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.post("/v1/createuser", userController.registerUser);
userRouter.post("/v1/login", userController.loginUser);

module.exports = userRouter;

const express = require("express");
const userRouter = express.Router();
// Core Module
const path = require("path");
const rootDir = require("../../utility/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "user", "home.html"));
});

module.exports = userRouter;

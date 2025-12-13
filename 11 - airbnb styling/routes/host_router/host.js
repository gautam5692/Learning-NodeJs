const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../../utility/pathUtil");

hostRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "host", "home.html"));
});

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "host", "get_add_home.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "host", "post_add_home.html"));
});

module.exports = hostRouter;

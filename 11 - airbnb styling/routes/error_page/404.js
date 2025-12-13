const express = require("express");
const pageNotFound = express.Router();
const path = require("path");
const rootDir = require("../../utility/pathUtil");

pageNotFound.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(rootDir, "views/", "error_page/", "404.html"));
});

module.exports = pageNotFound;

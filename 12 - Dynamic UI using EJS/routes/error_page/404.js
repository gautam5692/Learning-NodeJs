const express = require("express");
const pageNotFound = express.Router();
const path = require("path");
const rootDir = require("../../utility/pathUtil");

pageNotFound.use((req, res, next) => {
  res
    .status(404)
    .render("error_page/404", {pageTitle: "Page Not Found"});
});

module.exports = pageNotFound;

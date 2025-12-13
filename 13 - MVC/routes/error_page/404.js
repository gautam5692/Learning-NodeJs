const express = require("express");
const pageNotFound = express.Router();
const errController = require("../../controllers/errController");

pageNotFound.use(errController);

module.exports = pageNotFound;

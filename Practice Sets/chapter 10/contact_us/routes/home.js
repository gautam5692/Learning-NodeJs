const express = require("express")
const homeRouter = express.Router()
const path = require("path")
const rootDir = require("../utility/pathUtil")

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "home.html"))
});

homeRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/", "get_contact_us.html"))
});

homeRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir, "views/", "post_contact_us.html"));
});

module.exports = homeRouter;
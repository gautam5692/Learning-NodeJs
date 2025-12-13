const express = require("express");
const hostRouter = express.Router();
const registeredHomes = [];

hostRouter.get("/", (req, res, next) => {
  res.render("host/home", {
    registeredHomes,
    pageTitle: "Host Home - airbnb",
    activeTab: "Home",
  });
});

hostRouter.get("/add-home", (req, res, next) => {
  res.render("host/get_add_home", {
    pageTitle: "Add Home",
    activeTab: "getAddHome",
  });
});

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);
  res.render("host/post_add_home", {
    pageTitle: "Home Registration Successful",
    activeTab: "postAddHome",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

const express = require("express");
const userRouter = express.Router();
const { registeredHomes } = require("../host_router/host");

userRouter.get("/", (req, res, next) => {
  res.render("user/home", { registeredHomes, pageTitle: "Home - aribnb", activeTab: "Home" });
});

module.exports = userRouter;

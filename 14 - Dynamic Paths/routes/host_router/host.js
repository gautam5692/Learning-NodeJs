const express = require("express");
const {
  getAddHome,
  postAddHome,
  homePage,
  homeDetails,
  editHome,
  postHostHome,
} = require("../../controllers/host/controller");
const hostRouter = express.Router();

hostRouter.get("/", homePage);

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", postAddHome);

hostRouter.get("/home-details/:homeId", homeDetails);

hostRouter.post("/edit-home/:homeId", editHome);

hostRouter.post("/", postHostHome);

exports.hostRouter = hostRouter;

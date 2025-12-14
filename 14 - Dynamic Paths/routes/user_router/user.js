const express = require("express");
const { homePage, homeDetails, favourites, reserve, bookings } = require("../../controllers/user/controller");
const userRouter = express.Router();


userRouter.get("/", homePage);
userRouter.get("/favourites", favourites)
userRouter.get("/reserve", reserve)
userRouter.get("/bookings", bookings)
userRouter.get("/home-details/:homeId", homeDetails)

module.exports = userRouter;

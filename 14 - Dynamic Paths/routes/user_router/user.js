const express = require("express");
const { homePage, homeDetails, favourites, reserve, bookings, postAddFavourites } = require("../../controllers/user/controller");
const userRouter = express.Router();


userRouter.get("/", homePage);
userRouter.get("/favourites", favourites)
userRouter.get("/reserve", reserve)
userRouter.get("/bookings", bookings)
userRouter.get("/home-details/:homeId", homeDetails)
userRouter.post("/favourites", postAddFavourites)

module.exports = userRouter;

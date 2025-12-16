const express = require("express");
const {
  homePage,
  homeDetails,
  reserve,
  bookings,
  postFavourites,
  getFavourites,
} = require("../../controllers/user/controller");
const userRouter = express.Router();

userRouter.get("/", homePage);
userRouter.get("/reserve", reserve);
userRouter.get("/bookings", bookings);
userRouter.get("/home-details/:homeId", homeDetails);
userRouter.post("/favourites", postFavourites);
userRouter.get("/favourites", getFavourites)

module.exports = userRouter;

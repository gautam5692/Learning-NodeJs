const express = require("express");
const {
  homePage,
  homeDetails,
  bookings,
  postFavourites,
  getFavourites,
  postBookings,
  getBookings,
} = require("../../controllers/user/controller");
const userRouter = express.Router();

userRouter.get("/", homePage);
userRouter.get("/home-details/:homeId", homeDetails);
userRouter.post("/favourites", postFavourites);
userRouter.get("/favourites", getFavourites)
userRouter.post("/bookings", postBookings);
userRouter.get("/bookings", getBookings)

module.exports = userRouter;

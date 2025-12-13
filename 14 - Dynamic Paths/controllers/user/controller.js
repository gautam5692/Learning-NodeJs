const Home = require("../../models/home");

exports.homePage = (req, res, next) => {
  Home.fetchData((registeredHomes) => {
    res.render("user/home_page", {
      registeredHomes,
      pageTitle: "Home - aribnb",
      activeTab: "Home",
    });
  });
};

exports.homeDetails = (req, res, next) => {
  res.render("user/home_details", {
    pageTitle: "Home Details",
    activeTab: "Home Details"
  })
}

exports.favourites = (req, res, next) => {
  res.render("user/favourites", {
    pageTitle: "Favourites",
    activeTab: "favourites"
  })
}

exports.reserve = (req, res, next) => {
  res.render("user/reserve", {
    pageTitle: "Reserved Homes",
    activeTab: "reserve"
  })
}

exports.bookings = (req, res, next) => {
  res.render("user/bookings", {
    pageTitle: "Bookings",
    activeTab: "bookings"
  })
}

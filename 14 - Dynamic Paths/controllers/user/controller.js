const rootDir = require("../../utility/pathUtil");
const path = require("path");
const Home = require("../../models/home");
const homeDataFile = path.join(rootDir, "data", "homeData.json");
const favouritesDataFile = path.join(rootDir, "data", "favouritesData.json");

exports.homePage = (req, res, next) => {
  Home.fetchData(homeDataFile, (registeredHomes) => {
    Home.fetchData(favouritesDataFile, (favourites) => {
      res.render("user/home_page", {
        registeredHomes,
        pageTitle: "Home - aribnb",
        activeTab: "Home",
        favourites,
      });
    });
  });
};

exports.reserve = (req, res, next) => {
  res.render("user/reserve", {
    pageTitle: "Reserved Homes",
    activeTab: "reserve",
  });
};

exports.bookings = (req, res, next) => {
  res.render("user/bookings", {
    pageTitle: "Bookings",
    activeTab: "bookings",
  });
};

exports.homeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.fetchData(homeDataFile, (registeredHomes) => {
    const home = registeredHomes.find((home) => homeId == home.id);
    res.render("user/home_details", {
      home,
      pageTitle: "Home Details",
      activeTab: "Home Details",
    });
  });
};

exports.postFavourites = (req, res, next) => {
  const { homeId, action } = req.body;
  if (action === "add") {
    Home.addFavourites(homeId, () => {
      res.redirect("/favourites");
    });
  } else if (action === "remove") {
    Home.removeFavourites(homeId, () => {
      res.redirect("/favourites")
    })
  }
};

exports.getFavourites = (req, res, next) => {
  Home.fetchData(favouritesDataFile, (favourites) => {
    res.render("user/favourites", {
      pageTitle: "Favourites",
      activeTab: "favourites",
      favourites,
    });
  });
};

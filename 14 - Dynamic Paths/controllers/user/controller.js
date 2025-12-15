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

exports.favourites = (req, res, next) => {
  res.render("user/favourites", {
    pageTitle: "Favourites",
    activeTab: "favourites",
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
  Home.fetchData((registeredHomes) => {
    const home = registeredHomes.find((home) => homeId == home.id);
    res.render("user/home_details", {
      home,
      pageTitle: "Home Details",
      activeTab: "Home Details",
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  const { homeId } = req.body;
  Home.addFavourites(homeId)
  Home.fetchData((registeredHomes) => {
    const favourites = registeredHomes.filter((home) => home.isFavourite == true)
    res.render("user/favourites", {
      pageTitle: "Favourites",
      activeTab: "favourites",
      home,
    })
    });
};

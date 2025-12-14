const Home = require("../../models/home");

exports.homePage = (req, res, next) => {
  Home.fetchData((registeredHomes) => {
    res.render("host/home_page", {
      registeredHomes,
      pageTitle: "Host Home - airbnb",
      activeTab: "Home",
    });
  });
};

exports.getAddHome = (req, res, next) => {
  res.render("host/get_add_home", {
    pageTitle: "Add Home",
    activeTab: "getAddHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { house_name, house_img_url, price, location, rating } = req.body;
  const home = new Home(house_name, house_img_url, price, location, rating);
  home.save();
  res.render("host/post_add_home", {
    pageTitle: "Home Registration Successful",
    activeTab: "postAddHome",
  });
};

exports.homeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.fetchData((registeredHomes) => {
    const home = registeredHomes.find((home) => homeId == home.id);
    res.render("host/home_details", {
      home,
      pageTitle: "Home Details",
      activeTab: "Home Details",
    });
  });
};

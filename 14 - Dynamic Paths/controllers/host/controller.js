const rootDir = require("../../utility/pathUtil");
const path = require("path");
const Home = require("../../models/home");
const EditHome = require("../../models/edit_home");
const DeleteHome = require("../../models/delete_home");
const homeDataFile = path.join(rootDir, "data", "homeData.json");

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
    const home = registeredHomes.find((home) => homeId === home.id);
    res.render("host/home_details", {
      home,
      pageTitle: "Home Details",
      activeTab: "Home Details",
    });
  });
};

exports.editHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.fetchData((registeredHomes) => {
    const home = registeredHomes.find((home) => homeId === home.id);
    res.render("host/edit_home", {
      pageTitle: "Edit Home",
      activeTab: "Edit Home",
      home,
    });
  });
};

exports.postHostHome = (req, res, next) => {
  if (req.body.action === "delete") {
    DeleteHome.delete(req.body.homeId, () => {
      res.redirect("host");
    });
  } else {
    EditHome.save(req.body.id, req.body, () => {
      res.redirect("host");
    });
  }
};

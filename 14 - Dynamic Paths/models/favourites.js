const fs = require("fs");
const path = require("path");
const rootDir = require("../utility/pathUtil");
const Home = require("./home");
const { register } = require("module");
const favouritesDataFile = path.join(rootDir, "data", "favouritesData.json");

module.exports = class Favourite {
  static addFavourites(homeId, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId);
      registeredHomes[homeIndex].isFavourite = true;
      Home.writeIntoFile(registeredHomes, callback);
    });
  }

  static removeFavourites(homeId, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId);
      registeredHomes[homeIndex].isFavourite = false;
      Home.writeIntoFile(registeredHomes,callback);
    });
  }

  static fetchFavourites(callback) {
    Home.fetchData((registeredHomes) => {
      const favourites = registeredHomes.filter(
        (home) => home.isFavourite === true
      );
      callback(!favourites ? [] : favourites)
    });
  }
};

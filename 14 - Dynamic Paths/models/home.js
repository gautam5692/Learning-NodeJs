const fs = require("fs");
const rootDir = require("../utility/pathUtil");
const path = require("path");

const homeDataFile = path.join(rootDir, "data", "homeData.json");
const favouritesDataFile = path.join(rootDir, "data", "favouritesData.json");

module.exports = class Home {
  constructor(house_name, house_img_url, price, location, rating) {
    this.house_name = house_name;
    this.house_img_url = house_img_url;
    this.price = price;
    this.location = location;
    this.rating = rating;
  }

  save() {
    this.id = new Date().getTime().toString();
    this.isFavourite = false;
    Home.fetchData(homeDataFile, (registeredHomes) => {
      registeredHomes.push(this);
      Home.writeIntoFile(homeDataFile, registeredHomes);
    });
  }

  static writeIntoFile(dataFilePath, registeredHomes, callback) {
    fs.writeFile(dataFilePath, JSON.stringify(registeredHomes), (err) => {
      if (err) {
        console.log(err);
      }
      if (callback) {
        callback()
      }
    });
  }

  static fetchData(dataFilePath, callback) {
    fs.readFile(dataFilePath, (err, data) => {
      if (!err && data.toString() !== "") {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static addFavourites(homeId, callback) {
    Home.fetchData(homeDataFile, (registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => homeId == home.id);
      registeredHomes[homeIndex].isFavourite = true;
      Home.writeIntoFile(homeDataFile, registeredHomes);
      Home.fetchData(favouritesDataFile, (favourites) => {
        const favouriteHome = registeredHomes.find(
          (home) => home.isFavourite === true && home.id === homeId
        );
        const favExists = favourites.find((home) => home.id === homeId)
        if (!favExists) {
          favourites.push(favouriteHome);
        }
        Home.writeIntoFile(favouritesDataFile, favourites, () => {
          if (callback) {
            callback()
          }
        });
      });
    });
  }

  static removeFavourites(homeId, callback) {
    Home.fetchData(homeDataFile, (registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => homeId == home.id);
      registeredHomes[homeIndex].isFavourite = false;
      Home.writeIntoFile(homeDataFile, registeredHomes);
      Home.fetchData(favouritesDataFile, (favourites) => {
        favourites = favourites.filter((home) => home.id != homeId)
        Home.writeIntoFile(favouritesDataFile, favourites, () => {
          if (callback) {
            callback()
          }
        });
      });
    });
  }
};

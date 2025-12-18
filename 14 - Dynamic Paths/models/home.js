const fs = require("fs");
const rootDir = require("../utility/pathUtil");
const path = require("path");

const homeDataFile = path.join(rootDir, "data", "homeData.json");

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
    this.isBooked = false;
    Home.fetchData((registeredHomes) => {
      registeredHomes.push(this);
      Home.writeIntoFile(registeredHomes);
    });
  }

  static writeIntoFile(registeredHomes, callback) {
    fs.writeFile(homeDataFile, JSON.stringify(registeredHomes), (err) => {
      if (err) {
        console.log(err);
      }
      if (callback) {
        callback()
      }
    });
  }

  static fetchData(callback) {
    fs.readFile(homeDataFile, (err, data) => {
      if (!err && data.toString() !== "") {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};

const fs = require("fs");
const rootDir = require("../utility/pathUtil");
const path = require("path");

module.exports = class Home {
  constructor(house_name, house_img_url, price, location, rating) {
    this.house_name = house_name;
    this.house_img_url = house_img_url;
    this.price = price;
    this.location = location;
    this.rating = rating;
  }

  save() {
    Home.fetchData((registeredHomes) => {
      registeredHomes.push(this);
      const dataFilePath = path.join(rootDir, "data", "dataFile.json");
      fs.writeFile(dataFilePath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.log(err);
        }
      });
    })
  }
  
  static fetchData(callback) {
    const dataFilePath = path.join(rootDir, "data", "dataFile.json");
    fs.readFile(dataFilePath, (err, data) => {
      if (!err && data.toString() !== "") {
        callback(JSON.parse(data))
      } else {
        callback([])
      }
    })
  }
};

const fs = require("fs");
const path = require("path");
const rootDir = require("../utility/pathUtil");
const Home = require("./home");
const bookingsDataFile = path.join(rootDir, "data", "bookingsData.json");

module.exports = class Booking {
  static addBookings(homeId, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId);
      registeredHomes[homeIndex].isBooked = true;
      Home.writeIntoFile(registeredHomes, callback);
    });
  }

  static removeBookings(homeId, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId);
      registeredHomes[homeIndex].isBooked = false;
      Home.writeIntoFile(registeredHomes, callback);
    });
  }

  static fetchBookings(callback) {
    Home.fetchData((registeredHomes) => {
      const bookings = registeredHomes.filter((home) => home.isBooked === true);
      callback(!bookings ? [] : bookings);
    });
  }
};

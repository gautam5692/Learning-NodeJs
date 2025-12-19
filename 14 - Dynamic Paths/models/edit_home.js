const Home = require("./home")

module.exports = class EditHome {
  static save(homeId, data, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId)
      const {isFavourite, isBooked} = registeredHomes[homeIndex]
      data.isFavourite = isFavourite;
      data.isBooked = isBooked;
      console.log("Data", data)
      registeredHomes[homeIndex] = data;
      Home.writeIntoFile(registeredHomes, callback)
    })
  }
}
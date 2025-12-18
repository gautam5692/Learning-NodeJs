const Home = require("./home")

module.exports = class EditHome {
  static save(homeId, data, callback) {
    Home.fetchData((registeredHomes) => {
      const homeIndex = registeredHomes.findIndex((home) => home.id === homeId)
      registeredHomes[homeIndex] = data;
      console.log(registeredHomes.findIndex((home) => home.id === homeId))
      Home.writeIntoFile(registeredHomes, callback)
    })
  }
}
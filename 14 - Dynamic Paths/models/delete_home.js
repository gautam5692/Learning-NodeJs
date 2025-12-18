const Home = require("./home")

module.exports = class DeleteHome {
  static delete(homeId, callback) {
    Home.fetchData((registeredHomes) => {
      registeredHomes = registeredHomes.filter((home) => home.id !== homeId)
      Home.writeIntoFile(registeredHomes, callback)
    })
  }
}
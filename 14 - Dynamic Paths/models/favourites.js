const fs = require("fs");
const path = require("path");
const rootDir = require("../utility/pathUtil");
const favouritesDataFile = path.join(rootDir, "data", "favouritesData.json");


module.exports = class Favourite {

  static addFavourites(homeId, registeredHomes, callback) {
    const homeIndex = registeredHomes.indexOf((home) => home.id === homeId)
    registeredHomes[homeIndex].isFavourite = true;
    fs.writeFile(favouritesDataFile, JSON.stringify(registeredHomes))
    const favHome = registeredHomes.find((home) => home.id === homeId)
    Favourite.fetchFavourites((favourites) => {
      favourites.push(favHome)
      fs.writeFile(favouritesDataFile, JSON.stringify(favourites), (err) => {
        if (err) console.log(err)
        callback()
      })
    })
  }

  static removeFavourites(homeId, callback) {
    Favourite.fetchFavourites((favourites) => {
      favourites = favourites.filter((home) => home.id != homeId)
      fs.writeFile(favouritesDataFile, JSON.stringify(favourites), (err) => {
        if (err) console.log(err)
          callback()
      })
    })
  }

  static fetchFavourites(callback) {
    fs.readFile(favouritesDataFile, (err, data) => {
      callback(!err && data.toString != "" ? JSON.parse(data) : [])
    })
  }
}
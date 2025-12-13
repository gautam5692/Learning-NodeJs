const express = require("express")
const path = require("path")
const rootDir = require("../utility/pathUtil")
const errRouter = express.Router()

errRouter.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views/", "404.html"))
})

module.exports = errRouter;
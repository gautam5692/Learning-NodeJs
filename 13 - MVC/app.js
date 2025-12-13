// External Module
const express = require("express");
// Core Module
const path = require("path")
// Local Module
const rootDir = require("./utility/pathUtil")
const userRouter = require("./routes/user_router/user");
const {hostRouter} = require("./routes/host_router/host");
const pageNotFound = require("./routes/error_page/404");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views")

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")))

app.use(userRouter);
app.use("/host", hostRouter);

app.use(pageNotFound)

const PORT = 2100;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

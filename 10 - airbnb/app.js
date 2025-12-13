// External Module
const express = require("express");
// Local Module
const userRouter = require("./routes/user_router/user");
const hostRouter = require("./routes/host_router/host");
const pageNotFound = require("./routes/error_page/404");
const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);



app.use(pageNotFound)

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const homeRouter = require("./routes/home")
const errRouter = require("./routes/404")

app.use(express.urlencoded())
app.use(homeRouter)
app.use(errRouter)

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// External Module
const express = require("express");

const app = express();

// Adding middleware
app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  res.send("<h1>Came from first middleware.</h1>");
});

app.get("/post", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<h1>Welcome to Complete Coding</h1>");
});

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server on address http://localhost:${PORT}`);
});

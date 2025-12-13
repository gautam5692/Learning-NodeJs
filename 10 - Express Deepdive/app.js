const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to Home Page.</h1>
    <p>Go to <a href="/contact-us">Contact Us</a> page.</p>
    `);
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <form action="/contact-us" method="post">
      <input type="text" name="name" id="name" placeholder="Enter your name here">
      <br><br>
      <input type="email" name="email" id="email" placeholder="Enter you email here">
      <br><br>
      <button type="submit">Submit</button>
    </form>
    `);
});

app.use(bodyParser.urlencoded())

app.post("/contact-us", (req, res, next) => {
console.log(req.url, req.method, req.body)
  res.send(`
    <h1>Form Submitted successfully</h1>
    <p>Return to <a href="/">Home Page</a></p>
    <h2>Your name: ${req.body.name}</h2>
    <h2>Your email: ${req.body.email}</h2>
    `);
});

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

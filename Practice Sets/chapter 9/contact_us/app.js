const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log(req.url)
//   next()
// })

// app.use((req, res, next) => {
//   console.log(req.method)
//   next()
// })

// app.use((req, res, next) => {
//   console.log("This is the third middleware")
//   res.send("<h1>Welcome to this default page.</h1>")
// })

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

app.post("/contact-us", (req, res, next) => {
  res.send(`
    <h1>Form Submitted successfully</h1>
    <p>Return to <a href="/">Home Page</a></p>
    `);
});

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
    res.write('<form action="/submit-details" method="post">');
    res.write(
      '<input type="text" name="name" id="name" placeholder="Enter your namer here" autocomplete="off">'
    );
    res.write("<br><br>");
    res.write('<input type="radio" name="gender" id="male" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" id="female" value="female">');
    res.write('<label for="female">Female</label>');
    res.write("<br><br>");
    res.write('<button type="submit">Submit</button>');
    res.write("<br><br>");
    res.write("</form>");
    res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("output.txt", "Form submitted successfully");
    res.statusCode = 302; // 302 for redirecting
    res.setHeader("Location", "/");
    res.end();
  }
});

const PORT = 2200;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

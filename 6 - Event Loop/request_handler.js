const sum = require("./sum");

function requestHandler(req, res) {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
    res.write('<p>Link to <a href="/calculator">Calculator</a></p>');
    res.end();
  } else if (req.url === "/calculator") {
    res.write('<form action="/calculate-result" method="post">');
    res.write('<input type="number" name="num1">');
    res.write('<input type="number" name="num2">');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.end();
  } else if (req.url === "/calculate-result") {
    sum(req, res);
  }
}

module.exports = requestHandler;

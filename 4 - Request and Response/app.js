const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>First Response</title>");
  res.write("</head>");
  res.write("<body>");
  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/posts") {
    res.write("<h1>These are the posts</h1>");
  } else {
    res.write("<h1>This is another page.</h1>");
  }
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 2200;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

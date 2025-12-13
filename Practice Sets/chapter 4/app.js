const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write('<html lang="en">');
  res.write("<head>");
  res.write("<title>Document</title>");
  res.write("</head>");
  res.write("<body>");
  if (req.url === "/") {
    res.write("<h1>Welcome to the <b><i><u>default</i></u></b> page.</h1>");
  } else if (req.url === "/home") {
    res.write("<h1>Welcome to the <b><i><u>home</i></u></b> page.</h1>");
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to the <b><i><u>men</i></u></b> page.</h1>");
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to the <b><i><u>women</i></u></b> page.</h1>");
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to the <b><i><u>kids</i></u></b> page.</h1>");
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to the <b><i><u>cart</i></u></b> page.</h1>");
  }

  res.write("<ul>");
  res.write('<li><a href="/home">Home</a></li>');
  res.write('<li><a href="/men">Men</a></li>');
  res.write('<li><a href="/women">Women</a></li>');
  res.write('<li><a href="/kids">Kids</a></li>');
  res.write('<li><a href="/cart">Cart</a></li>');
  res.write("</ul>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 2200;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

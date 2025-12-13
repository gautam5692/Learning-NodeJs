const http = require("http");
const requestHandler = require("./request_handler");

const server = http.createServer(requestHandler);

const PORT = 2200;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

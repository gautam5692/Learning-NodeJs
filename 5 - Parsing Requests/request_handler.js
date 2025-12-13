const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url, req.method);
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
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      // const bodyObj = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObj[key] = val;
      // }

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync("output.txt", JSON.stringify(bodyObj));
    });
    res.statusCode = 302; // 302 for redirecting
    res.setHeader("Location", "/");
    res.end();
  }
}

module.exports = requestHandler;

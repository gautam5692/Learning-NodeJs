function sum(req, res) {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    const sum = Number(bodyObj.num1) + Number(bodyObj.num2);
    res.write(`<h1>Result: ${sum}</h1>`);
    res.end();
  });
}

module.exports = sum;

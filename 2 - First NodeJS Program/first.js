const fs = require("fs");

fs.writeFile("output.txt", "Writing file.", (err) => {
  if (err) console.log(err);
  console.log("File written successfully.");
});

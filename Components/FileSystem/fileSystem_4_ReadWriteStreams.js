const fs = require("fs");

const readStream = fs.createReadStream("./exampleForReadStream.txt", "utf-8");
const writeStream = fs.createWriteStream("./exampleForWriteStream.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

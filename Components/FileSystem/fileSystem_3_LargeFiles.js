const fs = require("fs");

// fs.readFile("./dummy.txt", (error, file) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(file);
//   }
// });

const readStream = fs.createReadStream("./dummy.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

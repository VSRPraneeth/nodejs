const http = require("http");
const fs = require("fs");
const server = http
  .createServer((req, res) => {
    // html files
    // const readStream = fs.createReadStream("./static/index.html");
    // res.writeHead(200, { "Content-type": "text/html" });

    // json files
    // const readStream = fs.createReadStream("./static/sample.json");
    // res.writeHead(200, { "Content-type": "application/json" });

    //image files
    const readStream = fs.createReadStream("./static/image.png");
    res.writeHead(200, { "Content-type": "image/png" });
    readStream.pipe(res);
  })
  .listen(4000);

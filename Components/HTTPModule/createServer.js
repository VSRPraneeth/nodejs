const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World from nodejs");
    res.end();
  } else {
    res.write("Using different domain");
    res.end();
  }
});

server.listen("4000");

const fs = require("fs");
const zlib = require("zlib");
// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./exampleForReadStream.txt", "utf-8");
// const writeStream = fs.createWriteStream("./exampleForWriteStream.txt");
// readStream.pipe(writeStream);

// const writeStream1 = fs.createWriteStream("./exampleForWriteStream.txt.gz");
// readStream.pipe(gzip).pipe(writeStream1);

const gUnzip = zlib.createGunzip();
const readStream1 = fs.createReadStream("./exampleForWriteStream.txt.gz");
const writeStream2 = fs.createWriteStream("exampleForWriteStream1.txt");

readStream1.pipe(gUnzip).pipe(writeStream2);

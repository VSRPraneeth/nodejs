const fs = require("fs");

// Create a file

// fs.writeFile(
//   "FileSystemExample1.txt",
//   "This is an example text file.",
//   (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("File Successfully Created");
//       fs.readFile("FileSystemExample1.txt", "utf8", (error, file) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log(file);
//         }
//       });
//     }
//   }
// );

// Rename a file

// fs.rename("FileSystemExample1.txt", "FileSystemExample2.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Successfully Renamed");
//   }
// });

// Append Data to the file

// fs.appendFile("FileSystemExample2.txt", "\nData Being appended.", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data Successfully Appended");
//   }
// });

// Delete a file

fs.unlink("FileSystemExample2.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Successfully Deleted");
  }
});

const fs = require("fs");

// Create a folder
// fs.mkdir("Folder1", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder Successfully created");
//   }
// });

// Delete a folder (This can be used only when folder is empty. If some files or folders exists inside, we get an error)
// fs.rmdir("Folder1", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder Successfully deleted");
//   }
// });

// Create new file within a new folder
// Create a folder
// fs.mkdir("Folder1", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Folder Successfully created");
//     // Create a file

//     fs.writeFile(
//       "./Folder1/exampleFile.txt",
//       "New File within the New Folder",
//       (error) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("File Successfully created inside the folder");
//         }
//       }
//     );
//   }
// });

// Remove a file within the folder
// Remove a file
// fs.unlink("./Folder1/exampleFile.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Successfully deleted inside the folder");
//     // Remove the folder
//     fs.rmdir("Folder1", (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Folder Successfully deleted");
//       }
//     });
//   }
// });

fs.readdir("FilesFolder", (error, files) => {
  if (error) {
    console.log(error);
  } else {
    console.log(files);
    for (let file of files) {
      fs.unlink(`./FilesFolder/${file}`, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`${file} Deleted`);
        }
      });
    }
  }
});

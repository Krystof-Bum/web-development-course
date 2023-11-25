const fs = require("fs");

// fs.writeFile("newFile", "new file text", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("./newFile", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

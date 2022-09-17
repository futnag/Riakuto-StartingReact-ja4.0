import * as fs from "fs";

// fs.readFile("./03-fp/04-async/foo.txt", (err, data) => {
//   console.log(data.toString());
//   fs.readFile("./03-fp/04-async/bar.txt", (err, data) => {
//     console.log(data.toString());
//     fs.readFile("./03-fp/04-async/baz.txt", (err, data) => {
//       console.log(data.toString());
//     });
//   });
// });

fs.readFile("./03-fp/04-async/foo.txt", (err, data) => {
  console.log(data.toString());
});

fs.readFile("./03-fp/04-async/bar.txt", (err, data) => {
  console.log(data.toString());
});

fs.readFile("./03-fp/04-async/baz.txt", (err, data) => {
  console.log(data.toString());
});

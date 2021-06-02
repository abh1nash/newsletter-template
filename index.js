const juice = require("juice");
const fs = require("fs");

const originalSource = fs.readFileSync(__dirname + "/dist/index.html", "utf8");

juice.juiceResources(
  originalSource,
  { webResources: { relativeTo: "dist" } },
  (err, html) => {
    fs.writeFileSync("dist/index.html", html);
  }
);

fs.readdir("dist", (err, files) => {
  const removables = ["css", "map"];
  files.forEach((file) => {
    let arr = file.split(".");
    if (removables.includes(arr[arr.length - 1])) fs.unlinkSync("dist/" + file);
  });
});

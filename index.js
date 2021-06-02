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

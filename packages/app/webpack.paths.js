const path = require("path");
//todo:need to figure out why yarn workspace places it in root node_modules sometimes.
module.exports = {
  src: path.join(__dirname, "src"),
  designSystemReact: path.join(
    __dirname,
    "..",
    "..",
    "node_modules",
    "@salesforce",
    "design-system-react"
  ),
  designSystemReactNodeModules: path.join(
    __dirname,
    "..",
    "..",
    "node_modules",
    "@salesforce",
    "design-system-react",
    "node_modules"
  ),
};

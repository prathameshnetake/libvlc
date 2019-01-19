const {
  vlcIncludes
} = require("./constants");
const {getLibs} = require("./libs");

const includes = vlcIncludes.replace((/\\/g, '/'));
console.log(includes);

module.exports = {
  includes,
  getLibs
}
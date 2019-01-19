const {
  vlcIncludes
} = require("./constants");
const {getLibs} = require("./libs");

module.exports = {
  includes: vlcIncludes.replace((/\\/g, '/')),
  getLibs
}
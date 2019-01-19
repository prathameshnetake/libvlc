const {vlcLibDir} = require("./constants");
const { exec, spawn, isWin, flags } = require('./utils');
const fs = require("fs");
const log = require("npmlog");
const path = require("path");

const getLibs = () => {
  if (isWin()) {
    const lib = fs.realpathSync(path.resolve(vlcLibDir, "libvlc.lib")).replace(/\\/g, '/');
    console.log(lib);
    if (fs.existsSync(`${vlcLibDir}/libvlc.lib`)) {
      log.info("lib", "libs do exist in this path");
      return lib;
    }
    return "";
  }
  return "";
}

module.exports = {
  getLibs
}

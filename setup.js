const log = require('npmlog')
const { exec, spawn, isWin, flags } = require('./utils')
const {
  rootDir
} = require("./constants");
const fs = require("fs");

function getIfExistsDirCmd(dirname, exists = true) {
  return isWin() ? `if ${!exists ? 'not ' : ''}exist ${dirname}` : ''
}

function getMkDirCmd(dirname) {
  return isWin() ? `${getIfExistsDirCmd(dirname, false)} mkdir ${dirname}` : `mkdir -p ${dirname}`
}

function getRmDirCmd(dirname) {
  return isWin() ? `${getIfExistsDirCmd(dirname)} rd /s /q ${dirname}` : `rm -rf ${dirname}`
}

module.exports = function() {
  const vlcBuildFOrWindows = 'https://github.com/prathameshnetake/libvlc-windows-prebuilt.git';
  if(!fs.existsSync("libvlc-windows")) {
    return spawn('git', ['clone', '--single-branch', '--depth',  1, '--progress', vlcBuildFOrWindows, "libvlc-windows"], { cwd: rootDir })
  } else {
    log.info("install", "vlc libs is already exists");
  }
}

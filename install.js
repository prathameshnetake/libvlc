const path = require('path')
const fs = require('fs')
const log = require('npmlog')
const setup = require("./setup")

if (process.env.npm_config_loglevel === 'silly') {
  log.level = 'silly'
}

const {
  isWin,
  isOSX,
  requireGit,
} = require('./utils')

function install() {
  return requireGit()
    .then(() => {
      log.info('install', 'Found git now run the setup process');
      setup();
    })
}

install()

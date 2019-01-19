const path = require('path')
const os = require('os');

const { isWin } = require('./utils')

const rootDir = __dirname
const vlcRoot = path.join(rootDir, 'libvlc-windows')
const vlcBuildDir = path.join(vlcRoot, 'build')
const vlcIncludes = path.join(vlcBuildDir, `${process.arch}/include`)
const vlcLibDir = isWin() ? path.join(vlcBuildDir, process.arch) : path.join(vlcBuildDir, 'lib')

const numberOfCoresAvailable = os.cpus().length

module.exports = {
  rootDir,
  vlcRoot,
  vlcBuildDir,
  vlcIncludes,
  vlcLibDir,
  numberOfCoresAvailable
}
'use strict'

module.exports = {
  onPreBuild({ constants: { PUBLISH_DIR } }) {
    console.log(PUBLISH_DIR, PUBLISH_DIR === __dirname)
  },
}

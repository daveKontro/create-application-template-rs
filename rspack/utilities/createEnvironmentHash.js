const { createHash } = require('crypto')

module.exports = ({ processEnv }) => {
  const hash = createHash('md5')
  hash.update(JSON.stringify(processEnv))

  return hash.digest('hex')
}

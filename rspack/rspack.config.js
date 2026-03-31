const { merge } = require('webpack-merge')
const commonConfig = require('./rspack.common.js')

require('dotenv-flow').config()

module.exports = (rspackEnv) => {
  const { BUNDLER_ENV } = rspackEnv

  const envConfig = require(`./rspack.${BUNDLER_ENV}.js`)

  const config = merge(commonConfig(rspackEnv), envConfig(rspackEnv))

  return config
}

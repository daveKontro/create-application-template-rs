const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

require('dotenv-flow').config()

module.exports = (webpackEnv) => {
  const { BUNDLER_ENV } = webpackEnv

  const envConfig = require(`./webpack.${BUNDLER_ENV}.js`)

  const config = merge(commonConfig(webpackEnv), envConfig(webpackEnv))

  return config
}

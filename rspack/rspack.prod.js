const { rspack } = require('@rspack/core')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WebpackShellPluginNext =require('webpack-shell-plugin-next')
const getPaths = require('./utilities/getPaths')
const getTerserOptions = require('./utilities/getTerserOptions')

module.exports = (rspackEnv) => {
  const { BUNDLER_ENV, BUNDLER_WITH_PROFILING } = rspackEnv

  const paths = getPaths({ BUNDLER_ENV })
  const terserOptions = getTerserOptions({ BUNDLER_WITH_PROFILING })

  return {
    mode: 'production',  // NODE_ENV
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({ terserOptions }),  // TODO investigate SwcJsMinimizerRspackPlugin
        new CssMinimizerPlugin(),  // TODO investigate LightningCssMinimizerRspackPlugin
      ],
    },
    plugins: [
      new rspack.DefinePlugin({
        'process.env.EXAMPLE': JSON.stringify('prodconfig'),
      }),
      new rspack.CssExtractRspackPlugin({  // new MiniCssExtractPlugin({
        filename: paths.static.css.filenameCss,
        chunkFilename: paths.static.css.chunkFilenameCss,
      }),
      // TODO watch list to see if WebpackShellPluginNext gets added:
      // https://rspack.rs/guide/compatibility/plugin#plugin-compatibility
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: ['ts-node scripts/generate-sitemap.ts'],
          blocking: true,
          parallel: false,
        },
      }),
    ],
  }
}

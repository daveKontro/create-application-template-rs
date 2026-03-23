const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WebpackShellPluginNext =require('webpack-shell-plugin-next')
const getPaths = require('./utilities/getPaths')
const getTerserOptions = require('./utilities/getTerserOptions')

module.exports = (webpackEnv) => {
  const { BUNDLER_ENV, BUNDLER_WITH_PROFILING } = webpackEnv

  const paths = getPaths({ BUNDLER_ENV })
  const terserOptions = getTerserOptions({ BUNDLER_WITH_PROFILING })

  return {
    mode: 'production',  // NODE_ENV
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({ terserOptions }),
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.EXAMPLE': JSON.stringify('prodconfig'),
      }),
      new MiniCssExtractPlugin({
        filename: paths.static.css.filenameCss,
        chunkFilename: paths.static.css.chunkFilenameCss,
      }),
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

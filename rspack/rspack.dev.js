const { rspack } = require('@rspack/core')
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const packageJson = require('../package.json')

module.exports = () => {
  const { PORT } = process.env

  return {
    mode: 'development',  // NODE_ENV
    devtool: 'cheap-module-source-map',
    devServer: {
      // static: {
      //   directory: paths.build,
      // },
      hot: true,
      open: true,
      port: PORT || 3333,
      proxy: [
        {
          context: ['/'],
          target: packageJson.proxy,
        },
      ],
      historyApiFallback: true,
    },
    plugins: [
      new rspack.DefinePlugin({
        'process.env.EXAMPLE': JSON.stringify('devconfig'),
      }),
      new ReactRefreshPlugin(),
      new rspack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin(),
    ],
  }
}

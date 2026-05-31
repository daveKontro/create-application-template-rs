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
          // proxy bypass - static file extensions
          // (.ico, fonts, images, JS, CSS) are now 
          // served directly by the dev server instead 
          // of being forwarded to localhost:3000
          bypass: (req) => {
            if (/\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|js|css|map)$/.test(req.path)) {
              return req.path
            }
          },
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

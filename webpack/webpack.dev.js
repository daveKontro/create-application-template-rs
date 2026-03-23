const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
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
      new webpack.DefinePlugin({
        'process.env.EXAMPLE': JSON.stringify('devconfig'),
      }),
      // NOTE per the docs added "react-refresh/babel" (r-r/b) to
      // .babelrc and babel-loader, but seems to work without r-r/b...
      // docs also used to say use webpack.HotModuleRepalcementPlugin,
      // which also seemed to be unneeded, and now they don't...
      // so be on the lookout for doc changes related to r-r/b too
      new ReactRefreshWebpackPlugin(),
      new CaseSensitivePathsPlugin(),
    ],
  }
}

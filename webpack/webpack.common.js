const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const env = require('./utilities/env')
const getPaths = require('./utilities/getPaths')
const createEnvironmentHash = require('./utilities/createEnvironmentHash')
const generateAssetManifest = require('./utilities/generateAssetManifest')

// styles regexps
const reCss = /\.css$/
const reCssModule = /\.module\.css$/

module.exports = (webpackEnv) => {
  const { BUNDLER_ENV } = webpackEnv
  const { INLINE_SIZE_LIMIT } = process.env

  const paths = getPaths({ BUNDLER_ENV })

  // NOTE it's preferable to isolate settings in appropriate 
  // files, but it's not always practical, hence "isProduction"
  const isProduction = (BUNDLER_ENV === env.BUNDLER_ENV.prod)
  const isDevelopment = (BUNDLER_ENV === env.BUNDLER_ENV.dev)

  const styleLoaders = [
    ...(isProduction
      ? [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          // css is located in 'static/css', use publicPath
          // to locate index.html directory relative to css
          publicPath: '../../',
        },
      }]
      : ['style-loader']
    ),
  ]

  return {
    entry: paths.src.indexTsx,
    resolve: {
      // can now leave off extentions when importing
      extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    watchOptions: {
      ignored: ['**/node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  // for use with ReactRefreshWebpackPlugin
                  isDevelopment
                    && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
                cacheDirectory: true,
                cacheCompression: false,
                compact: isProduction,
              },
            },
          ],
        },
        {
          test: reCss,
          use: [...styleLoaders, 'css-loader'],
          exclude: reCssModule,
        },
        {
          test: reCssModule,
          use: [
            ...styleLoaders,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: parseInt(INLINE_SIZE_LIMIT || 10000),
            },
          },
        },
      ],
    },
    output: {
      path: paths.build,
      pathinfo: isProduction ? false : true,
      filename: paths.static.js.filenameJs,
      chunkFilename: paths.static.js.chunkFilenameJs,
      asyncChunks: true,
      clean: true,
      assetModuleFilename: paths.static.media.filenameExt,
      publicPath: '',  // public url of build, use in build/index.html
    },
    cache: {  // used in development mode
      type: 'filesystem',
      version: createEnvironmentHash({ processEnv: process.env }),
      cacheDirectory: paths.appWebpackCache,
      store: 'pack',
      buildDependencies: {
        defaultWebpack: ['webpack/lib/'],
        config: [__filename],
        tsconfig: [paths.tsconfigJson, paths.jsconfigJson].filter(file =>
          fs.existsSync(file)
        ),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.src.indexHtml,
        favicon: paths.src.assets.faviconIco,
        title: 'Create Application Template',
        ...(isProduction && {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
      }),
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: '/',
        generate: generateAssetManifest,
      }),
      new CopyPlugin({
        patterns: [{
          from: paths.src.public,
          to: paths.build,
        }],
      }),
      new Dotenv(),
    ],
  }
}

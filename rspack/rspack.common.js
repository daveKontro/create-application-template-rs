const fs = require('fs')
const { rspack } = require('@rspack/core')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { RspackManifestPlugin } = require('rspack-manifest-plugin')
const packageJson = require('../package.json')
const env = require('./utilities/env')
const getPaths = require('./utilities/getPaths')
const createEnvironmentHash = require('./utilities/createEnvironmentHash')
const generateAssetManifest = require('./utilities/generateAssetManifest')

// styles regexps
const reCss = /\.css$/
const reCssModule = /\.module\.css$/

module.exports = (rspackEnv) => {
  const { BUNDLER_ENV } = rspackEnv
  const { INLINE_SIZE_LIMIT } = process.env

  const paths = getPaths({ BUNDLER_ENV })

  // NOTE it's preferable to isolate settings in appropriate 
  // files, but it's not always practical, hence "isProduction"
  const isProduction = (BUNDLER_ENV === env.BUNDLER_ENV.prod)
  const isDevelopment = (BUNDLER_ENV === env.BUNDLER_ENV.dev)

  const styleLoaders = [
    ...(isProduction
      ? [{
        loader: rspack.CssExtractRspackPlugin.loader,  // MiniCssExtractPlugin.loader,
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
      // can now leave off extensions when importing
      extensions: ['.tsx', '.jsx', '.ts', '.js'],
      tsConfig: paths.tsconfigJson,
    },
    watchOptions: {
      ignored: ['**/node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(j|t)s$/,
          exclude: [/[\\/]node_modules[\\/]/],
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
              externalHelpers: true,
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDevelopment,
                  refresh: isDevelopment,
                },
              },
            },
            env: {
              targets: 'Chrome >= 48',  // browser compatibility
            },
          },
        },
        {
          test: /\.(j|t)sx$/,
          exclude: [/[\\/]node_modules[\\/]/],
          use: [
            {
              loader: 'builtin:swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                  },
                  transform: {
                    react: {
                      runtime: 'automatic',
                      development: isDevelopment,
                      refresh: isDevelopment,
                    },
                  },
                  externalHelpers: true,
                  experimental: {
                    plugins: [
                      ['@swc/plugin-styled-components', {
                        displayName: true,
                        ssr: true,
                        fileName: true,
                      }],
                    ],
                  },
                },
                env: {
                  targets: 'Chrome >= 48',
                },
              },
            },
            // NOTE see docs for usage of React Compiler via babel
            // https://rspack.rs/guide/tech/react#react-compiler
            {
              loader: 'babel-loader',
              options: {
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
        templateParameters: {
          faviconVersion: isProduction
            ? packageJson.version
            : Date.now(),
        },
        title: 'Create Application Template RS',
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
      new RspackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: '/',
        generate: generateAssetManifest,
      }),
      new rspack.CopyRspackPlugin({
        patterns: [{
          from: paths.src.public,
          to: paths.build,
        }],
      }),
      new Dotenv(),
    ],
  }
}

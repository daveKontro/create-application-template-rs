const path = require('path')
const env = require('./env')

// NOTE root path assumes execution from react app root

const getPaths = ({ BUNDLER_ENV }) => {
  const isProduction = (BUNDLER_ENV === env.BUNDLER_ENV.prod)

  return {
    root: process.cwd(),
    get jsconfigJson() { return path.join(this.root, 'jsconfig.json') },
    get tsconfigJson() { return path.join(this.root, 'tsconfig.json') },
    get build() { return path.join(this.root, 'build') },
    static: {
      static: 'static',
      get css() {
        return {
          css: path.join(this.static, 'css'),
          get filenameCss() { return path.join(this.css, '[name].[contenthash].css') },
          get chunkFilenameCss() { return path.join(this.css, '[name].[contenthash].chunk.css') },
        }
      },
      get js() {
        const filenameJs = isProduction ? '[name].[contenthash].js' : '[name].js'
        const chunkFilenameJs = isProduction ? '[name].[contenthash].chunk.js' : '[name].chunk.js'

        return {
          js: path.join(this.static, 'js'),
          get filenameJs() { return path.join(this.js, filenameJs) },
          get chunkFilenameJs() { return path.join(this.js, chunkFilenameJs) },
        }
      },
      get media() {
        return {
          media: path.join(this.static, 'media'),
          get filenameExt() { return path.join(this.media, '[name].[hash][ext]') },
        }
      },
    },
    get src() {
      return {
        src: path.join(this.root, 'src'),
        get indexTsx() { return path.join(this.src, 'index.tsx') },
        get indexHtml() { return path.join(this.src, 'index.html') },
        get public() { return path.join(this.src, 'public') },
        get assets() {
          return {
            assets: path.join(this.src, 'assets'),
            get faviconIco() { return path.join(this.assets, 'favicon.ico') },
          }
        },
      }
    },
  }
}

module.exports = getPaths

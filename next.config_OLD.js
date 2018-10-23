// next.config.js
const withCSS = require('@zeit/next-css')

// https://wookiehangover.com/writing/static-sites-with-next-js.html
module.exports = withCSS({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/opencall': { page: '/opencall'},
      '/program': { page: '/program'},
      '/resources': { page: '/resources'}
    }
  }
})

/*
// sendt til Tobias - implementér
// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
*/

/*
module.exports = withCSS({
  webpack: function(config, options) {
    const { dev, isServer } = options
    const extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/css/style.css',
      disable: dev
    })
    config.module.rules.push({
      test: /\.css$/,
      use: cssLoaderConfig(extractCSSPlugin, {
        cssModules,
        dev,
        isServer
      })
    })
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/opencall': { page: '/opencall'},
      '/program': { page: '/program'},
      '/resources': { page: '/resources'}
    }
  }
})
*/
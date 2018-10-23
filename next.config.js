// next.config.js
const withCSS = require('@zeit/next-css')

// https://wookiehangover.com/writing/static-sites-with-next-js.html
module.exports = withCSS({
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
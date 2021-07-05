const { path } = require('@vuepress/utils')

module.exports = {
  alias: {
    '@assets': path.resolve(__dirname, 'assets'),
  },
  clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js'),
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    Home: path.resolve(__dirname, 'layouts/Home.vue'),
    Project: path.resolve(__dirname, 'layouts/Project.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
  },
}

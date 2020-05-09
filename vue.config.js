var webpack = require('webpack');
module.exports = {
  configureWebpack: config => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
              VUE_APP_VERSION: JSON.stringify(require('./package.json').version)
          }
        })
      ]
    }
  },
}

const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/app/shared/modules/components'));
    config.resolve.alias.set('@models', path.resolve(__dirname, 'src/app/shared/models'));
  },
};
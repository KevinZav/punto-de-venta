const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/app/shared/modules/components'));
    config.resolve.alias.set('@models', path.resolve(__dirname, 'src/app/shared/models'));
    config.resolve.alias.set('@pages', path.resolve(__dirname, 'src/app/pages'));
    config.resolve.alias.set('@hooks', path.resolve(__dirname, 'src/app/shared/hooks'));
    config.resolve.alias.set('@custom-types', path.resolve(__dirname, 'src/app/shared/types'));
  },
};
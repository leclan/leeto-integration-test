const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#079CEE',
      '@btn-shadow': '0px 1px 4px rgba(0, 58, 140, 0.2)',
      '@btn-primary-shadow': '0px 1px 4px rgba(0, 58, 140, 0.2)'
    },
  }),
);
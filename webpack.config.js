const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env = { env: 'common' }) => {
  console.log(env.env + ' this is me');

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
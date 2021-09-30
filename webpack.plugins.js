const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoadPlugin = require("vue-loader/lib/plugin");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new VueLoadPlugin()
];

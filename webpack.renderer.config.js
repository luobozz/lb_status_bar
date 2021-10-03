const { normalizeUnits } = require('moment');
const rules = require('./webpack.rules');

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'vue-loader'}],
// });

module.exports = {
  // devtool:"none",
  module: {
    rules,
  },
};

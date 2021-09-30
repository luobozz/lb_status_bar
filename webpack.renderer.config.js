const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push(
  {
    test: /\.css$/,
    use: [
      { loader: "vue-style-loader" },
      { loader: "style-loader" },
      { loader: "css-loader" },
    ],
  },
  {
    test: /\.vue$/,
    use: [{ loader: "vue-loader" }],
  }
);

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".vue"],
  },
};

const path = require('path');
const rendererPath = "main_window"

module.exports = {
  devtool: false,
  output: {
  },
  resolve: {
    fallback: {
      // 采用contextBridge引入electron所需node核心模块
      // https://webpack.docschina.org/configuration/resolve/
      // os: require.resolve("os-browserify"),
      // path: require.resolve("path-browserify"),
    }
  },
  module: {
    rules: [
      // Add support for native node modules
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-optional-chaining"
            ],
            presets: ["@babel/preset-env"],
            sourceType: 'unambiguous',
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: `${rendererPath}/static/images`
            }
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: `${rendererPath}/static/fonts`
            }
          },
        ],
      }
    ],
  },
};

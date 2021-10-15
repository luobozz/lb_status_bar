const path = require('path');

const rendererPath = "main_window"

module.exports = {
  // devtool:"none",
  output: {
    publicPath: "../",
    filename: `${rendererPath}/js/[name].[hash].js`,
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

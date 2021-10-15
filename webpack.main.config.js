const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  devtool: "none",
  // Put your normal webpack config below here
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' },
    ])
  ],
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
              outputPath: `static/images`
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
              outputPath: `static/fonts`
            }
          },
        ],
      }
    ],
  }
};

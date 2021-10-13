module.exports = [
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
        sourceType:'unambiguous'
      }
    }
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
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
          name: "static/images/[name].[ext]",
          outputPath: 'static'
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
          name: "static/fonts/[name].[ext]",
          outputPath: 'static'
        }
      },
    ],
  }
];

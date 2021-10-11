module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
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
        options:{
          name:"static/images/[name].[ext]",
          outputPath:'static'
        }
      },
    ],
  },
  {
    test: /\.(woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
        options:{
          name:"static/fonts/[name].[ext]",
          outputPath:'static'
        }
      },
    ],
  }
];

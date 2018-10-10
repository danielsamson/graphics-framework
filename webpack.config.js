const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true
  },
  mode: 'development'
};

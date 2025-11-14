const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/templates/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    port: 9000
  },

  // reglas para tipos de archivos
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
};

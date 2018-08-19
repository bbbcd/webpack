const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
            template: './index.html'
        }
    ),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,//是否压缩
    port: 9000
  }
};



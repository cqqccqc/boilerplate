const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');

const srcPath = './src/';
const buildPath = './assets/';

module.exports = {
  entry: {
    list: srcPath + 'list/index'
  },
  output: {
    path: buildPath,
    filename: '[name].js'
  },

  plugins: [
    commonsPlugin,
    new ExtractTextPlugin("[name].css"),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    })
  ],


  module: {
    loaders: [
      // html
      { test: /\.htm(l?)$/, loader: 'html-loader' },
      // 提取css
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      //.css 文件使用 style-loader 和 css-loader 来处理
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader', query: {compact: false}  },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      { test: /\.scss$/, loader: 'style!css!scss?sourceMap' },
      { test: /\.less$/, loader: 'style!css!less?sourceMap' },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(2*)$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.svg$/, loader: "file" }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee', '.html', '.css', '.scss']
  }
};

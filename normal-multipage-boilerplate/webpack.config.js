var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');
//var BomPlugin = require('webpack-utf8-bom');

var srcPath = './';
var libPath = './node_modules/';
var bulidPath = './assets/';

module.exports = {
  entry: {
    index: './js/home/index',
    events: './js/event/list/main',
    hotelList: './js/hotel/list/main',
    hotelDetail: './js/hotel/detail/main',
    invoiceIndex: './js/invoice/index/main',
    bookResult: './js/order/bookResult',
    paymentResult: './js/order/paymentResult',
    searchContactOrder: 'js/order/contactorderlist/searchContactOrder',
    contactOrderDetail: './js/order/contactOrderDetail/contactOrderDetail',
    contactOrderList: './js/order/contactorderlist/contactOrderList',
    orderDetail: './js/order/detail/detail',
    orderFill: './js/order/fill/fill',
    orderList: './js/order/list/list',
    orderModify: './js/order/modify/modify',
    orderInfo: './js/order/orderInfo/orderInfo',
    
    vendor: ['./js/common/common', './js/common/native.history', 'jquery', 'underscore', 'babel-polyfill']
  },
  output: {
    path: bulidPath,
    filename: '[name].js'
  },

  plugins: [
    commonsPlugin,
    //new BomPlugin(true),
    // new webpack.ProvidePlugin({
        // $: "jquery",
        // jQuery: "jquery",
        // "window.jQuery": "jquery"
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    new ExtractTextPlugin('[name].css')
  ],


  module: {
    loaders: [
      // html
      { test: /\.htm(l?)$/, loader: 'html-loader' },
      // 提取css
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // es6 use babel-loader
      //{ test: /\.es(6?)$/, loader: 'babel-loader' },
      //.jsx 文件使用 jsx-loader 来编译处理
      //{ test: /\.jsx$/, loader: 'babel-loader' },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      //{ test: /\.scss$/, loader: 'style!css!scss?sourceMap' },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
      //{ test: /\.woff(2*)$/, loader: "url?limit=10000&minetype=application/font-woff" },
      //{ test: /\.ttf$/, loader: "file" },
      //{ test: /\.eot$/, loader: "file" },
      //{ test: /\.svg$/, loader: "file" },
      // export jquery to window
      //{test: require.resolve('jquery'), loader: 'expose?jQuery'}
    ]
  },
  
  resolve: {
    root: [srcPath, libPath],
    extensions: ['', '.js', '.jsx', '.coffee', '.html', '.css', '.scss']
    
  }
};

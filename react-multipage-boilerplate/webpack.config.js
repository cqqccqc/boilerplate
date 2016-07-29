var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');
//var BomPlugin = require('webpack-utf8-bom');

var srcPath = './src/';
var libPath = './node_modules/';
var bulidPath = './assets/';

module.exports = {
  entry: {
    hotelinput: srcPath + 'js/hotel/hotelinput',
    hotellist: srcPath + 'js/hotel/hotellist',
    roomlist: srcPath + 'js/room/roomlist',
    orderlist: srcPath + 'js/order/orderlist',
    roomorderlist: srcPath + 'js/order/roomorderlist',
    eventlist: srcPath + 'js/event/eventlist',
    orderdetail: srcPath + 'js/order/orderdetail',
    eventHotelExInfo: srcPath + 'js/event/eventHotelExInfo',
    vendor: [
      'jquery',
      'jquery-ui',
      'jquery-ui-css',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'babel-polyfill',
      srcPath + 'js/datepicker/js/bootstrap-datetimepicker.min.js',
      srcPath + 'js/datepicker/css/bootstrap-datetimepicker.css',
      srcPath + 'js/bootstrap/css/bootstrap.min.css',
      srcPath + 'js/bootstrap/js/bootstrap.min.js',
      
      srcPath + 'css/dashboard.css',
    ],

  },
  output: {
    path: bulidPath,
    filename: '[name].js'
  },

  plugins: [
    commonsPlugin,
    //new BomPlugin(true),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    new ExtractTextPlugin("[name].css")
  ],


  module: {
    loaders: [
      // html
      { test: /\.htm(l?)$/, loader: 'html-loader' },
      // 提取css
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      //.css 文件使用 style-loader 和 css-loader 来处理
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
      // es6 use babel-loader
      { test: /\.es(6?)$/, loader: 'babel-loader' },
      //.jsx 文件使用 jsx-loader 来编译处理
      { test: /\.jsx$/, loader: 'babel-loader' },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      { test: /\.scss$/, loader: 'style!css!scss?sourceMap' },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(2*)$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file" },
      { test: /\.eot$/, loader: "file" },
      { test: /\.svg$/, loader: "file" },
      // export jquery to window
      {test: require.resolve('jquery'), loader: 'expose?jQuery'}
    ],
  },
  
  resolve: {
    root: [srcPath, libPath],
    extensions: ['', '.js', '.jsx', '.coffee', '.html', '.css', '.scss'],
    alias: {
      'jquery-ui-css': libPath + 'jquery-ui/themes/base/jquery-ui.css'
    }
  }
};

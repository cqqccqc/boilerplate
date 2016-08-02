const webpack = require('webpack');

const vendors = [
    'lodash',
    'immutable',
    'async',
    'jquery',
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-router',
    'redux-thunk',
    'redux-logger',
    'antd',
    'babel-polyfill'
];

module.exports = {
    output: {
        path: 'assets',
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        'lib': vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}

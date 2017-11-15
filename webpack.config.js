const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        first:APP_DIR + '/app.js'
        },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
           new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
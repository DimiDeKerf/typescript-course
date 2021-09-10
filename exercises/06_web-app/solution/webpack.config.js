const path = require('path');
const loaders = require('./webpack/loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        port: 2400
    },
    module: {
        rules: loaders
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ]
};
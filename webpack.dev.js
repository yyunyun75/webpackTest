const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port: 8888,
        host: 'localhost',
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot module replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

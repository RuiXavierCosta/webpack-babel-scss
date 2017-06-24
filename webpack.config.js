'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.html'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ],
        loaders: [
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file"
            },
            {
                test: /\.(html)$/,
                loader: "file"
            }
        ]
    }
}
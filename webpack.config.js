'use strict';

var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        app: './src/js/index.js'
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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: './index.html',
                    to: './'
                },
                {
                    from: './src/fonts/',
                    to: './src/fonts'
                },
                {
                    from: './src/images/',
                    to: './src/images'
                },
            ],
            {
                ignore: [
                    '.DS_Store'
                    // // Doesn't copy any files with a txt extension    
                    // '*.txt',

                    // // Doesn't copy any file, even if they start with a dot
                    // '**/*',

                    // // Doesn't copy any file, except if they start with a dot
                    // { glob: '**/*', dot: false }
                ],
            }
        ),
    ]
}
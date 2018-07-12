const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundler.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                  }
                //    {
                //     loader: 'less-loader' // compiles Less to CSS
                //   }
            ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true,
        proxy: {
            '/api/todo': 'http://localhost:3000'
          }
    }
}
const { merge } = require("webpack-merge")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules:[
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
            test: /\.styl(us)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader","postcss-loader"]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
          }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
})
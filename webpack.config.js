const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: './js/main.boundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool:'inline-source-map',
    devServer: {
        compress: false,
        port: 5000,
        open: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modulse/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|sass|css)$/,
                loader: [
                    'style-loader',
                    // MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html'
        }),
        new MiniCSSExtractPlugin({
            filename: './css/style.bundle.[hash].css'
        }),
        new OptimizeCssAssets(),
        new CleanWebpackPlugin()
    ]
};
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'html/'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 7,
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            'sass-loader',
            ],
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'SWAPI Table',
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new VueLoaderPlugin(),
        new LiveReloadPlugin({}),
    ],
};

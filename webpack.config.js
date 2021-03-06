const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const csswring = require("csswring");
const path = require("path");

const sassLoaders = [
    "css-loader",
    "postcss-loader",
    "sass-loader?includePaths[]=" + path.resolve(__dirname, "./src"),
];

const config = {
    entry: {
        app: ["./app/main"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
            },
            {
                test: /\.html/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'babel?stage=1'
            }

        ]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "./build"),
        publicPath: "/",
    },
    postcss: function(){
        return [autoprefixer, csswring]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss"],
        modulesDirectories: ["app", "node_modules"],
    },
    devServer:{
        port: 1234
    }
};

module.exports = config;
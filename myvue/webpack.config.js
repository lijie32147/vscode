const path=require('path');

const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, "js\\main.js"),
    output: {
        path: path.join(__dirname,"dist"),
        filename: "bundles.js"
    },

    module: {
        rules: [
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.(jpg|png|gif|bmp)$/,use:['url-loader']},
            {test: /\.vue$/,use:['vue-loader']}
        ]
    },

    resolve: {
        alias: {
            "vue$": "../node_modules/vue/dist/vue.min.js"
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
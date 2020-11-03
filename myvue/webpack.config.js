const path=require('path');

module.exports = {
    entry: path.join(__dirname, "js\\main.js"),
    output: {
        path: path.join(__dirname,"dist"),
        filename: "bundles.js"
    },

    module: {
        rules: [
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.jpg$/,use:['url-loader']}
        ]
    }
}
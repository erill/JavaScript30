const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: `${__dirname}/js`,
        filename: 'bundle.js'
    },
    watch: true, //mozna pominac
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        ["env", {
                          "targets": {
                            "browsers": ["> 1%"]
                          }
                        }]
                      ]
                }
            }
        ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}
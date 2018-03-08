const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.ts',
    mode: 'development',
    devtool: 'source-map',
    devServer: {                               
        contentBase: "./",                               
        port: 9000,
        open: true                           
    },      
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {         
        filename: './bundle.js',
        publicPath: 'dist/'
        // publicPath: path.join(__dirname, 'dist')
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
}

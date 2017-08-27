var path = require('path');

module.exports = {

    //bundle all the assets from ->
    entry: './src/index.js',

    //final bundle.js output in dist folder
    //path.resolve() method resolves a sequence of paths into an absolute path.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //pre-process files
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    //tell the location of the files to served
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};
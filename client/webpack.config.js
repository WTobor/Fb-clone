const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: path.join(__dirname, './src/scripts/main.js'),

    output: {
        filename: 'main.bundle.js',
        path: path.join(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CopyPlugin([
          { from: './src/index.html'}
        ]),
      ],
};
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

    entry: './src/client/client.js',
    output: {
        filename: 'clientBundle.js',
        path: path.resolve(__dirname, 'public')
    },    
};

module.exports = merge(baseConfig, config)
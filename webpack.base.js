const webpack = require('webpack');
module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    "es2015",
                    'react',
                    'stage-0',
                    [
                        'env',
                        {
                            targets: {browsers: ['last 2 versions']}
                        }
                    ]
                ]
            }}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],     
}
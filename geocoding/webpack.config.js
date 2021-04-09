const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './lib/index.js',
    plugins: [
        new Dotenv()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './docs'),
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader',
            ],
        },
        ],
    },
    externals: {
        'mapbox-gl': 'mapboxgl'
    }
};
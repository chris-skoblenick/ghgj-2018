// Used snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/ to assist in creation of this.

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
        ]
    },

    // This is for the webpack-dev-server.
    // Serve the contents of the build folder.
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },

    plugins: [
        // Copy a file into output directory when we build.
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'build'),
            }
        ]),

        // This came from the guide listed at the top of the file.
        // THe idea is to only have webpack include the relevant renderer of Phaser.
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(false),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
        }),
    ]
};

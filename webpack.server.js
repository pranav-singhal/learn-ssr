const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './server/index.js',

    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    plugins: [new MiniCssExtractPlugin(
        {
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }
    )],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },

            {
                test: /\.module\.s([ac])ss$/,
                loader: [
                    isDevelopment ? 'isomorphic-style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s([ac])ss$/,
                exclude: /\.module.(s([ac])ss)$/,
                loader: [
                    isDevelopment ? 'isomorphic-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }


        ]
    }
};

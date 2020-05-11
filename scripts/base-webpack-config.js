/*
 * 项目的基本 webpack 配置
 * @Author: CntChen
 * @Date: 2020-05-09
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isProduction, projectDir, HASH } = require('./config');

const sourceMap = isProduction ? 'source-map' : 'cheap-module-source-map';

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            'src': path.resolve(projectDir, 'src'),
        },
    },
    externals: {
    },
    devtool: sourceMap,
    optimization: {
        minimize: isProduction,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: [
                    /node_modules/
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'less-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        // 将 node 的运行环境传递到 webpack 的构建环境
        // 用于设置 react / react-dom 为调试模式; 除非调试 lib 库本身错误, 正常不需要开启
        // new webpack.EnvironmentPlugin(['NODE_ENV']),
        new MiniCssExtractPlugin({
            filename: isProduction ? `[name]${HASH}.css` : '[name].css',
            chunkFilename: isProduction ? `[name]${HASH}.css` : '[name].css',
        }),
    ],
};

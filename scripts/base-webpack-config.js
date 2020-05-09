/*
 * 项目的基本 webpack 配置
 * @Author: CntChen
 * @Date: 2020-05-09
 */

const path = require('path');
const { isProduction, projectDir } = require('./config');

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
        ],
    },
    plugins: [
    ],
};

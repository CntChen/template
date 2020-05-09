
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { isProduction, outputPath, entryBasePath, HASH } = require('./config');
const baseWebpackConfig = require('./base-webpack-config');
const entryList = require('./get-entry-list');

/**
 * 项目构建入口
 */
const entry = entryList.reduce((pre, cur) => {
    pre[cur.key] = path.join(entryBasePath, cur.js);
    return pre;
}, {});

/**
 * html 生成插件列表
 */
const HtmlWebpackPluginList = entryList.reduce((pre, cur) => {
    pre.push(
        new HtmlWebpackPlugin({
            template: path.join(entryBasePath, cur.html),
            filename: cur.html,
            minify: isProduction,
            // 只包含该 html 对应 entry 的 chunk
            chunks: [cur.key],
        }),
    );
    return pre;
}, []);

module.exports = (option) => {
    const config = {
        entry,
        output: {
            filename: isProduction ? `[name]${HASH}.js` : '[name].js',
            path: outputPath,
        },
        plugins: [
            ...HtmlWebpackPluginList,
        ],
    };

    return webpackMerge.smart(baseWebpackConfig, config);
};

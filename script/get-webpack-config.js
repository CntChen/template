const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isProduction, outputPath, projectDir, platform, HASH } = require('./config');

const sourceMap = isProduction ? 'source-map' : 'cheap-module-source-map';

module.exports = (option) => {
    if (!option || !option.platform) {
        throw new Error('参数错误');
    }

    if (platform !== 'all' && option.platform !== platform) {
        return undefined;
    }

    const pagePath = path.join(projectDir, `./src/${option.platform}`);
    const outputFilePath = option.platform === 'mobile' ? `${outputPath}/m` : outputPath;

    const config = {
        entry: {
            index: path.join(pagePath, '/index.ts'),
        },
        output: {
            filename: isProduction ? `[name]${HASH}.js` : '[name].js',
            path: outputFilePath,
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
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
            new HtmlWebpackPlugin({
                template: path.join(pagePath, '/index.html'),
                filename: 'index.html',
                excludeChunks: ['send'],
            }),
        ],
    };

    return config;
};

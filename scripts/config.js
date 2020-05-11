/*
 * 项目构建配置
 */

const path = require('path');

/**
 * 项目根目录
 */
const projectDir = path.join(__dirname, '..');

/**
 * 打包输出目录
 */
const outputPath = path.join(projectDir, './dist');

/**
 * 构建是否为生产模式
 */
const isProduction = process.env.NODE_ENV === 'production';

/**
 * 生成页面的 html 资源位置
 */
const entryBasePath = './src/template/';

module.exports = {
    projectDir,
    outputPath,
    isProduction,
    entryBasePath,
    HASH: '-[contenthash:10]',
};

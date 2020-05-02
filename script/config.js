/*
 * 项目构建配置
 */

const path = require('path');

const projectDir = path.join(__dirname, '..');
const outputPath = path.join(projectDir, './dist');
const isProduction = process.env.NODE_ENV === 'production';
const platform = process.env.PLAT_FORM.toLowerCase();

module.exports = {
    projectDir,
    outputPath,
    isProduction,
    platform,
    HASH: '-[hash:10]',
};

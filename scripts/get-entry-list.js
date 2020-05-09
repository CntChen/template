/*
 * 获取构建的资源入口
 * @Author: CntChen
 * @Date: 2020-05-09
 */

const path = require('path');

const { getAllFiles }= require('./utils');
const { projectDir, entryBasePath } = require('./config');

const entryPath = path.join(projectDir, entryBasePath);
const fileListInsideEntryPath = getAllFiles(entryPath);

const htmlFileList = fileListInsideEntryPath
    .filter(file => {
        // 只保留 html 资源
        return /\.html$/.test(file)
    })
    .map(file => {
        // 去掉绝对路径
        return file.replace(entryPath, '').replace('.html', '');
    });

const jsFileList = fileListInsideEntryPath
    .filter(file => {
        // 只保留 js 资源
        return /\.ts$/.test(file)
    })
    .map(file => {
        // 去掉绝对路径
        return file.replace(entryPath, '').replace('.ts', '');
    });

// 匹配 js 的 html 资源检查
jsFileList.forEach(file => {
    if (htmlFileList.indexOf(file) === -1) {
        console.log('启动构建失败:');
        throw new Error(`请确认有无 ${path.resolve(entryBasePath, file)}.html 文件`);
    }
});

// 匹配 html 的 js 资源检查
htmlFileList.forEach(file => {
    if (jsFileList.indexOf(file) === -1) {
        console.log('启动构建失败:');
        throw new Error(`请确认有无 ${path.resolve(entryBasePath, file)}.ts 文件`);
    }
});

/**
 * 构建入口列表
 * 列表示例
    [
        { entry: 'index', js: 'index.ts', html: 'index.html' },
        { entry: 'm/index', js: 'm/index.ts', html: 'm/index.html' },
        { entry: 'm/send', js: 'm/send.ts', html: 'm/send.html' },
        { entry: 'send', js: 'send.ts', html: 'send.html' }
    ]
*/
const entryList = jsFileList.map(cur => {
    return {
        key: cur,
        js: `${cur}.ts`,
        html: `${cur}.html`
    };
});

// 调试构建入口列表
// console.log('构建入口列表\n', entryList);

module.exports = entryList;

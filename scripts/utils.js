/*
 * 构建流程的工具函数
 * @Author: CntChen
 * @Date: 2020-05-09
 */

const fs = require('fs');
const path = require('path');

/**
 * 遍历目录获取目录下的文件数组
 */
function getAllFiles(root) {
    let res = [];
    const files = fs.readdirSync(root);

    files.forEach(function(file) {
        const pathname = path.join(root, file);
        const stat = fs.lstatSync(pathname);

        if (!stat.isDirectory()) {
            res.push(pathname);
        } else {
            res = res.concat(getAllFiles(pathname));
        }
    });
    return res;
}

module.exports = {
    getAllFiles,
}

const webpack = require('webpack');
const execSync = require('child_process').execSync;
const { isProduction, outputPath } = require('./config');
const getWebpackConfig = require('./get-webpack-config');

/**
 * 一些前置构建的配置, 比如 lib 文件复制到发布目录等
 */
const preWorkConfig = undefined;
/**
 * 资源入口打包配置
 */
const webpackConfig = getWebpackConfig();


function getBuildFinishTime() {
    function addZero(num) {
        return `0${num}`.slice(-2);
    }

    const now = new Date();
    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

    return `@${hours}:${minutes}:${seconds}`;
}

const statFunc = (cb) => {
    return (err, stats) => {
        if (!err) {
            console.log(
                stats.toString({
                    all: false,
                    assets: true,
                    chunks: true,
                    errors: true,
                    errorDetails: false,
                    warnings: false,
                    timings: false,
                    colors: true,
                })
            );
            cb(err, stats);
        } else {
            console.log(err);
        }
    };
};

// 清理构建目录
execSync(`rm -rf ${outputPath}`);

if (isProduction) {
    const compiler = webpack([preWorkConfig, webpackConfig].filter(c => !!c));
    compiler.run(
        statFunc((err, stats) => {
            console.log('dist: 构建完成', getBuildFinishTime());
        })
    );
} else {
    const compiler = webpack([preWorkConfig, webpackConfig].filter(c => !!c));
    compiler.watch(
        {
            ignored: ['node_modules', 'script'],
            aggregateTimeout: 300,
        },
        statFunc((err, stats) => {
            console.log('dev: 构建完成', getBuildFinishTime());
        })
    );
}

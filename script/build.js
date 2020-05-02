const webpack = require('webpack');
const execSync = require('child_process').execSync;
const { isProduction, outputPath } = require('./config');
const getWorkerConfig = require('./get-webpack-config');

const pcConfig = getWorkerConfig({
    platform: 'pc',
});
const mobileConfig = getWorkerConfig({
    platform: 'mobile',
});


function getBuildFinishTime() {
    function addZero(num) {
        return ('0' + num).slice(-2);
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
    const compiler = webpack([pcConfig, mobileConfig].filter(c => !!c));
    compiler.run(
        statFunc((err, stats) => {
            console.log('dist: 构建完成', getBuildFinishTime());
        })
    );
} else {
    const compiler = webpack([pcConfig, mobileConfig].filter(c => !!c));
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

// 引入 View 层
import 'src/view/container/index';

import createAlloyWorker from '../worker/index';

// 创建 AlloyWorker 实例
const alloyWorker = createAlloyWorker({
    workerName: 'alloyWorker--test',
});

// 挂载到全局环境, 用于调试
// @ts-ignore
window.alloyWorker = alloyWorker;

// 发起第一次调用
alloyWorker.workerAbilityTest.communicationTest()
    .then((res) => console.log(`%cWorker test result: ${res}`, 'color: green; font-size: 20px'));

console.log('%cThis is Index', 'color: blue; font-size: 16px;');

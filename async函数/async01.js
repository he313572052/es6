'use strict'
const fs = require('fs');
const path = require('path');
const path1 = path.join(__dirname, './01.txt');
const path2 = path.join(__dirname, './02.txt');
const readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};
const gen = function*() {
    let f1 = yield readFile(path1);
    let f2 = yield readFile(path2);
    console.log(f1.toString());
    console.log(f2.toString());
};

// 写成async函数，就是下面这样。
const asyncReadFile = async function() {
    let f1 = await readFile(path1);
    let f2 = await readFile(path2);
    console.log(f1.toString());
    console.log(f2.toString());
};
//asyncReadFile(); //async自带执行
//基本用法
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value); //这个就是他的resolve函数
}
// asyncPrint('你好世界', 500);

//async函数返回的是一个promise对象
async function fn1(value) {
    return value;
}
fn1('你好世界').then(v => {
    // console.log(v);
});
//async函数返回的promise对象状态必须要内部的 await执行完或者碰到return或throw语句才能确定。
// await命令
// 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
// 错误处理
// 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。

function fn2(value) {
    return new Promise((resolve, reject) => {
        // i / 0;
        resolve(value);
    })
}
async function syncFn() {
    let fnn2 = await fn2('你好世界');
    // await Promise.reject('出错了');
    let fnn3 = await fn2('hello,word');
    console.log(fnn2);
    console.log(fnn3.toString());
}
syncFn().catch((error) => {
    console.log(error);
})



// 异步遍历的接口 § ⇧

// async function f() {
//     const asyncIterable = createAsyncIterable(['a', 'b']);
//     const asyncIterator = asyncIterable[Symbol.asyncIterator]();
//     console.log(await asyncIterator.next());
//     // { value: 'a', done: false }
//     console.log(await asyncIterator.next());
//     // { value: 'b', done: false }
//     console.log(await asyncIterator.next());
//     // { value: undefined, done: true }
// }
// f();
// for await of
// createAsyncIterable()

// for await(const ele of eles){

// }
// 异步 Generator 函数 § ⇧
// async function* gen() {
//     yield 'hello';
// }
// const genObj = gen();
// genObj.next().then(x => console.log(x));
// async function* gen1() {
//     yield 'a';
//     yield 'b';
//     return 2;
// }

// async function* gen2() {
//     // result 最终会等于 2
//     const result = yield* gen1();
// }
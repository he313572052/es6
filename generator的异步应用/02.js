//Generator 函数的流程管理 § ⇧
const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const path1 = path.join(__dirname, './01.txt')
const path2 = path.join(__dirname, './02.txt');
const CO = require('co');
var readFileThunk = thunkify(fs.readFile);
//thunkify模块是将函数自动转化成thunk函数

// var gen = function*() {
//     var r1 = yield readFileThunk(path1);
//     console.log(r1.toString());
//     var r2 = yield readFileThunk(path2);
//     console.log(r2.toString());
// };
// var g = gen();
// var r1 = g.next();
// r1.value(function(err, data) {
//     if (err) throw err;
//     var r2 = g.next(data);
//     r2.value(function(err, data) {
//         if (err) throw err;
//         g.next(data);
//     });
// });
//Thunk 函数的自动流程管理 § ⇧
function run(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}

function* g() {
    var f1 = yield readFileThunk(path1);
    var f2 = yield readFileThunk(path2);
    console.log(f1.toString());
    console.log(f2.toString());
}

// run(g);
// co模块是
// Generator 函数的自动执行。
// CO(g);
//基于promise对象的自动执行。
var readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) throw err;
            resolve(data);
        })
    })
}

function* gen() {
    var f1 = yield readFile(path1);
    var f2 = yield readFile(path2);
    console.log(f1);
    console.log(f2);
}
CO(gen);
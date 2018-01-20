// 异步任务的封装 § ⇧
// Thunk 函数 § ⇧
var x = 10;

function fn(args) {
    // console.log(args(x) + 5);
}

function thunk(x) {
    return x + 5;
}
fn(thunk)

// Thunkify 模块 § ⇧
// Generator 函数的流程管理 § ⇧
function* gen() {
    yield '123';
    yield '456';
    yield '789';
    return 'over';
}

var g = gen();
var res = g.next();

while (!res.done) {
    // console.log(res.value);
    res = g.next();
}
// 11.Generator函数的应用
// （1）异步操作的同步化表达 § ⇧
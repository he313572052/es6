//实例：使用 Proxy 实现观察者模式 § ⇧
// 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
'use strict';
const set = new Set();
const observe = fn => set.add(fn);
const observable = obj => new Proxy(obj, {
    set(target, propKey, value) {
        var result = Reflect.set(target, propKey, value);
        set.forEach(fn => fn());
        return result;
    }
})

function print() {
    console.log(`${object.name},${object.age}`);
}
let object = observable({
    name: 'tom',
    age: 25
});
console.log(object);
observe(print)
object.name = 'he';
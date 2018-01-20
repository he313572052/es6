//使用iterator接口的条件
var it = makeIterator(['a', 'b']);

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
        }
    };
}
it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }


//2.默认 Iterator 接口 § ⇧
const obj = {
    [Symbol.iterator]() {
        var nextIndex = 0;
        return {
            next() {
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}
let arr = ['a', 'b', 'c', 'd', 'e'];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 对象（Object）没有默认部署 Iterator 接口
//3. 调用 Iterator 接口的场合 § ⇧
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
// x='a'; y='b'
let [first, ...rest] = set;


//6. 遍历器对象的return()，throw() § ⇧  变量提前退出或者回收资源会调用迭代器的return方法
function readLineSync(file) {
    return {
        next() {
            return { done: false }
        },
        return () {
            return { done: true }
        }
    }
}
//7. for...of循环 § ⇧
let object = {
    name1: 'jack',
    age1: 25,
    score1: 98,
    [Symbol.iterator]() {
        var _this = this;
        var nextIndex = 0;
        return {
            next() {
                var values = Object.values(_this);
                return nextIndex < values.length ? { value: values[nextIndex++], done: false } : { done: true };
                // nextIndex++                                先使用再++
            }
        }
    }
}
for (let obj of object) {
    console.log(obj)
}
//字符串的for of
let string = 'public static void main'
for (let str of string) {
    console.log(str);
}
// 数组的for of
let arr1 = ['aa', 'bb', 'cc', 'dd']
for (let i of arr1) {
    console.log(i);
}
//set 的 for  of
let set1 = new Set()
set1.add('jack').add('jack').add('rose').add('tomcat')
for (let i of set1) {
    console.log(i);
}
//map的for  of
let map = new Map();
map.set('1', 'jack').set('2', 'tom').set('3', 'cat').set('4', 'bird');
for (let [key, value] of map) {
    console.log(`${key}=${value}`);
}
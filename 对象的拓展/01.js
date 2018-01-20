//1.属性的简洁表示法 § ⇧
//1属性简写
function f1(name, age) {
    return { name: name, age: age } //允许把参数名作为对象的属性名，参数值作为对象的属性值传入
}
console.log(f1('jack', 28));
//2方法简写
const obj = {
    method() {
        console.log('你好世界');
    }
}
console.log(obj.method());
//3属性名表达式  es6允许表达式表示属性名
let name = 'name';
let obj1 = {
    [name]: 'jack',
    ['a' + 'ge']: 18
}
console.log(obj1.name);
console.log(obj1.age);
//3.1对象方法的name属性
console.log(obj.method.name); //获取对象方法的名字
//4.Object.is() § ⇧ 比较2个是否相等
console.log(Object.is('off', 'off')); //true
console.log(Object.is({}, {})); //false 对象比较的是引用
console.log(Object.is(-0, +0)); //false
//5.Object.assign() § ⇧  法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
let jack = {
    name: 'jack',
    age: 18,
    score: {
        yuwen: 89,
        shuxue: 78,
        yingyu: 98
    }

}
let rose = {
    name: 'rose',
    age: 28,
    worker: 'teacher',
    husband: 'jin'
}
let ht = Object.assign(jack, rose);
//5.1浅拷贝
console.log(ht); //{name: "rose", age: 28, score: 28, worker: "teacher", husband: "jin"}
//5.2同名属性的替换
// 6.属性的可枚举性和遍历 § ⇧
//6.1 可枚举性 § ⇧
Object.getOwnPropertyDescriptor(rose, 'name').enumerable = false; //对象可枚举
//为了避免遍历到原型对象继承的方法和属性使用 Object.keys();避免使用for...in 循环
//6.2 属性的遍历 § ⇧
for (var key in rose) {
    console.log(key + ' = ' + rose[key]);
}
// 7.Object.getOwnPropertyDescriptors() § ⇧ 返回对象所有属性的描述
let descriptors = Object.getOwnPropertyDescriptors(rose);
console.log(descriptors);
//8.__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() § ⇧
let person = {
    name: 'per',
    age: 25,
}
let stu = {
    score: 98,
    class: '三年级'
}
stu._proto_ = person; //设置对象的原型对象
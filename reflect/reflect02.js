//reflect的静态方法
let myObj = {
    name: 'jack',
    age: 18,
    score: 95,
    address: '河滨花园',
    say() {
        console.log('hello,world');
    }
};
// 1.set方法
Reflect.set(myObj, 'name', 'rose');
// 2.get方法
let name = Reflect.get(myObj, 'name');
console.log(name); //rose
//3.deleteProperty 删除属性
Reflect.deleteProperty(myObj, 'address');
// 4.has
console.log(Reflect.has(myObj, 'address')); //false
//5.Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}
let mark = Reflect.construct(Student, ['mark', 25, 95]);
console.log(mark);
// 其他方法看api
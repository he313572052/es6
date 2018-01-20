// 1.class基本用法
//1 类中的属性可以用表达式
let hello = Symbol();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return 'name=' + this.name + ';age=' + this.age;
    };
    [hello]() {
        console.log('你好世界');
    }
}
var person = new Person('jack', '18');
console.log(person.toString());
//2.Object.assign()方法添加类的方法
Object.assign(Person.prototype, {
    say() {
        console.log('hello,world');
    }
})
person.say();
person[hello]();
// 2. 类的实例对象 § ⇧
// 3.constructor 方法 § ⇧  类的构造函数
// 3.1 new 关键字创建类的实例的时,自动调用 constructor()方法
// 3.2 类内部没有定义constructor()方法，默认有一个constructor()方法;

//4. 类的实例对象 § ⇧
var p1 = new Person('rose', 25);
p1.score = 98;
console.log(p1.score);
p1.__proto__.address = () => {
    console.log('我的家庭住址');
}
var p2 = new Person('tom', 26);
p2.address();

//5. Class 表达式 § ⇧
const Student = class Stu {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return Stu.name; //Me 没卵用
    }
};
// 类名为Student
// Stu只是类的内部调用相当于this;
var stu1 = new Student('tom', 25);
console.log(stu1.getName())

// 6.不存在变量提升 § ⇧

/* var cl = new Clazz(); //报错  Clazz is not defined
class Clazz {

} */
//7. 私有方法 § ⇧ 
const bar = Symbol('bar');
const snaf = Symbol('snaf');
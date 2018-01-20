//proxy 拦截方法介绍
// 1、get() § ⇧
var person = {
    name: 'jack'
}
var proxy = new Proxy(person, {
        get: function(target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new Error('属性不存在');
            }
        }
    })
    // console.log(person.name);
person.age;

//2、set() § ⇧
let validator = {
    set: function(obj, prop, value) {
        if (prop == 'age') {
            if (!Number.isInteger(value)) {
                throw new Error('年龄必须为数值');
            }
            if (value >= 200) {
                throw new Error('年龄不得大于200');
            }
        }
        obj[prop] = value;
    }
}
let stu = new Proxy({}, validator);
stu.age = 199;
stu.name = 'jack';
//定义对象的内部属性禁止外部访问
let stu1 = {
    name: 'jack',
    age: 17,
    _address: '河滨花园',
    _father: 'tom',
    _mom: 'rose',
}
const proxy1 = new Proxy(stu1, {
    get(target, propKey) {
        if (propKey.startsWith('_')) throw new Error('此属性不可用访问');
        return target[propKey]
    },
    set(target, propKey, value) {
        if (propKey.startsWith('_')) throw new Error('此属性不可赋值')
        target[propKey] = value;
        return true;
    }
})
let p_stu = Object.create(proxy1);
p_stu.age = 25


//3、apply() § ⇧ apply方法拦截函数的调用、call和apply操作。
function target1() {
    return "我是目标方法";
}
const applay_proxy = new Proxy(target1, {
    apply() {
        return "我是代理";
    }
})
applay_proxy();

function sum(x, y) {
    return x + y;
}

var applay_proxy1 = new Proxy(sum, {
    apply(target, ctx, args) {
        return Reflect.apply(...arguments) * 2
    }
})
console.log(applay_proxy1(10, 20));
//4、has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
// 1、修改某些Object方法的返回结果，让其变得更合理。
//老写法
/* try {
    Object.defineProperty(target, property, attributes)
} catch (error) {

} */
//新写法
/* if (Reflect.defineProperty(target, property, attributes)) {
    //success
} else {
    //failure
} */
// 2、让Object操作都变成函数行为。
//老写法
console.log('assign' in Object);
console.log(Reflect.has(Object, 'assign'));
//3.完成Proxy默认行为，作为修改行为的基础。
var proxy = new Proxy({}, {
    set(target, propKey, value) {
        var success = Reflect.set(target, propKey, value); //确保完成赋值行为如果没调用此方法不会完成默认的赋值行为
        // var success = true;
        if (success) console.log(`${propKey}=${value}`);
        return success;
    }
})
proxy.name = 'tomcat';
console.log(proxy.name);
//例子2
var proxy1 = new Proxy({}, {
    set(target, propKey, value) {
        console.log(`${propKey}=${value}`);
        return Reflect.set(target, propKey, value)
    },
    get(target, propKey) {
        console.log(propKey);
        return Reflect.get(target, propKey);
    },
    has(target, propKey) {
        console.log(propKey);
        return Reflect.has(target, propKey);
    }
})
proxy1.name = 'rose';
console.log(proxy1.name);
// Proxy 代理
var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1;
console.log('================');
++obj.count
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log(target.a);

//要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。let
var proxy1 = new Proxy({}, {
    get(target, prototype) {
        return 35;
    }
})
let obj1 = Object.create(proxy1);
console.log(obj1.time); //35
/**********************************************************************/
var obj2 = {
    proxy: new Proxy({}, {
        get(target, prototype) {
            return 35;
        }
    })
}
console.log(obj2.proxy.time);
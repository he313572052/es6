//map 数据结构 map集合，键值对但是 key可以为对象，传统的对象属性必须为字符串
let key = {};
let map = new Map();
// 1.map集合的方法
map.set(key, '你好');
/* console.log(map.size); //获取map的size属性
console.log(map.get(key));
console.log(map.has(key)); */ //判断某个key是否是包含在map中
map.clear(); //清空map
map.set(1, 'a');
map.set(2, 'b');
map.set(3, 'c');
map.set(4, 'd');
// map转化成数组 使用spread方法
let map_arr = [...map];
console.log(map_arr);
// 数组的filer方法来过滤map
map_arr.map(([x, y]) => console.log(`${x}=${y}`));
console.log('======================');
// 使用数组的map方法遍历map
map_arr.map((x, y) => console.log(x));
//Map的forEache方法遍历
console.log('===============');
//map的forEach方法可以接收参数
/* const reporter = {
    report(key, value) {
        console.log(`${key} = ${value}`);
    }
}
map.forEach((value, key, map) => {
    this.report(key, value); //此处的this指向reporter
}, reporter); */

//map与其他数据类型的转化
// 1.map转数组
let a_map = new Map();
a_map.set('name', 'jack').set('age', 25).set('score', 98).set('class', '三班');
[...a_map]
// 数组转化成map 数组转化成map数组中的元素必须都是对象
let a_arr = [{
        'name': 'rose'
    },
    {
        'age': 25
    }, {
        'score': 98
    }, {
        'class': '四班'
    }
];
let b_map = new Map(a_arr);
//Map转json 普通json直接转换
console.log(JSON.stringify(a_map));
//WeakMap   只接受对象作为键名（null除外） WeakMap的键名所指向的对象，不计入垃圾回收机制。
/**
 * New node file
 */
let [a,b,c] = [1,2,3];
//console.log(a)
//console.log(b)
//console.log(c)


let [foo, [[bar], baz]] = [1, [[2], 3]];//吃饱了撑着写法
//console.log(foo);
//console.log(bar);
//console.log(baz);


let [x,,y] = [1,,3]
//console.log(x);
//console.log(y);


let [n,...arr] = [1,2,3,4,5,6];
//console.log(n);//1
//console.log(arr);//[ 2, 3, 4, 5, 6 ]


//set结构

let [o,p,q] = new Set(['oo','pp','qq']);
//console.log(o);//oo

//不完全解构
let [i,j] = [123];
console.log(i);//123
console.log(j);//undefined

//解析赋值允许指定默认值

let [ii = 123,jj = 456]  = [];
console.log(jj);
console.log(ii);











/**
 * New node file
 */
//11.解构赋值和替换 § ⇧ 很有用
let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar'); 
console.log(one)
console.log(two)
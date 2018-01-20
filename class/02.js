// 7.私有方法 § ⇧
const bar = Symbol('bar');
const snaf = Symbol('snaf');

/* export default class Clazz {
    //公用方法
    foo(baz) {
        this[bar](baz);
    };
    //私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
} */
//12.Class 的 Generator 方法 § ⇧
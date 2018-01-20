//then最后的catch会捕获所有的异常
var someSyncThing = () => {
    return new Promise((resolve, reject) => {
        resolve(x + 2); //内部的异常并不会导致程序终止，而是throw出去给catch的回调捕获
    })
}
someSyncThing().then(() => {
    return someSyncThing();
}).catch((error) => {
    console.log('捕获异常' + error);
    y + 2;
}).catch((error) => {
    console.log('捕获异常2' + error);
});
5.Promise.all() § ⇧
var someSyncThing1 = (x) => {
    return new Promise((resolve, reject) => {
        resolve(x + 2); //内部的异常并不会导致程序终止，而是throw出去给catch的回调捕获
    })
}
var promises = [2, 3, 4, 5, 6].map(id => {
    return someSyncThing1(x);
})
Promise.all(promises).then(()=>console.log('全部resolved才调用')).catch((error)=>console.log('有一个rejected就调用'))
//如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
//6.Promise.race() § ⇧ 同上
//7.Promise.resolve() § ⇧ 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。
// （1）参数是一个Promise实例 则原封不动的返回promise对象
// (2)如果参数是thenable对象 生产resolved状态的新的promise，然后执行thenable的then方法
var thenable = {//thenabel对象是指有then方法的对象
    then(resove,reject){

    }
}
//(3).Promise.resolve('abc') 参数不是对象 生成新的promise对象
//(4).Promise.resolve() 无参数的也是直接生成对象
//8. Promise.reject()方法同上 § ⇧
//9. 两个有用的附加方法 § ⇧
// 9.1.done()
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => { throw reason }, 0);
    });
};
//9.2 finally() § ⇧
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };
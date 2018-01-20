'use strict';
//案例1
function timeout(ms) {
    return new Promise((resolve, reject) => {
        // setTimeout(func, delay, param1)
        // setTimeout第三个参数作为func的参数传入
        setTimeout(resolve, ms, '你好')
    })
}
timeout(1000).then(function(value) {
    console.log(value);
});
//案例2
let promise = new Promise((resolve, reject) => {
    try {
        console.log('promise');
        let i = 1 / 0;
    } catch (error) {
        throw new Error('被除数不能为零');
    }
    if (resolve) {
        resolve();
    } else {
        reject();
    }
})
promise.then(() => console.log('success'), () => console.log('failed'));
//案例3
function loadImageSync(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject(new Error('不能加载图片。。。'));
        }
        img.src = url;
    })
}
loadImageSync('http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg').then(img => console.log(img),
    error => {
        throw error
    }
);
// 案例5 
var getJSON = (url) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = handler
        xhr.responseType = 'JSON';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
        var handler = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error('请求失败'))
            }
        }
    })
};
//案例6 Promise.prototype.then() § ⇧ 链式写法
const url = 'http://api.budejie.com/api/api_open.php?a=category&c=subscribe'
getJSON(url).then(response => {
    return response.responseType; //返回值作为第二个then的参数
}).then(data => console.log(data), error => { throw error });
// 案例7 Promise.prototype.catch() § ⇧ Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
getJSON(url).catch(error => {
    throw error;
})
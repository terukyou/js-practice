let data = {
    red: '赤色',
    yellow: '黄色'
};
// dataオブジェクトに対して存在しないプロパティが出た時？を出す
let proxy = new Proxy(data, {
    get(target, prop) {
        return prop in target ? target[prop] : '?';
    }
});

console.log(proxy.red);
console.log(proxy.nothing);

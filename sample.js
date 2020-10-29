let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([
    ['MON', '月曜'],
    ['TUE', '火曜'],
    ['WED', '水曜']
]);
// for...ofでオブジェクトの内容を列挙(イテレーター)できる
for (let d of data_ary) {
    console.log(d); //one,two,three
}
for (let d of data_str) {
    console.log(d); //あ,い,う,え,お
}
for (let [key, value] of data_map) {
    console.log(`${key}:${value}`); //MON:月曜,TUE:火曜,WED:水曜
}

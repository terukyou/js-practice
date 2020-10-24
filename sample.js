var data = [2, 3, 4, 5];

// 配列の内容を順番に処理
// forEach文(value=値,index=番号,array=元の配列)
data.forEach(function (value, index, array) {
    console.log(value * value);
}); //4,9,16,25

// 配列を指定のルールで加工
// mapメソッド
var result1 = data.map(function (value, index, array) {
    return value * value;
});
console.log(result1); //[4,9,16,25]

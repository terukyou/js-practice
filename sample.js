var data = [2, 3, 4, 5];

// 要素がひとつでもあってるか
// someメソッド(evaryメソッド:全ての要素が一致しているか)
var result1 = data.some(function (value, index, array) {
    return value % 3 === 0;
});

if (result1) {
    console.log('3の倍数が見つかりました');
} else {
    console.log('3の倍数は見つかりませんでした');
} //3の倍数が見つかりました

// 条件にあった要素のみ取り出す
// filterメソッド
var result2 = data.filter(function (value, index, array) {
    return value % 2 == 1;
});
console.log(result2); //[3,5]

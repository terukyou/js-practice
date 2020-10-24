// Symbolモノの名前を作成する型(文字列じゃない)
// シンボルを生成
let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

// 定数の値として利用
const MONDAY = Symbol();

// エラーが出る
console.log(sym1 + '');
console.log(sym1 - 0);
// Boolean型は可
console.log(typeof !!sym1);


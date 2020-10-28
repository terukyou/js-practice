var Area = function () { };
// 静的プロパティ/メソッド インスタンス生成せんでもいい
Area.version = '1.0';
Area.triangle = function (base, height) {
    return base * height / 2;
};
Area.diamond = function (width, height) {
    return width * height / 2;
};
console.log(Area.version);
console.log(Area.triangle(5, 3));

// インスタンス化(この時静的メンバーは追加されない)
var a = new Area();

console.log(a.version); //undefined
console.log(a.triangle(5, 3)); //エラー
// 静的プロパティは、読み取り専用の用途に使え（は？？？？？？？
// 静的メソッドの中ではthis使えん（は？？？？？？？？？？？

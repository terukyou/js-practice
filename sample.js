// 関数はデータ型
var getTriangle = function (base, height) {
    return base * height / 2;
};
getTriangle = 0; //エラーにならない

// function命令は静的(プログラムの実行時に確定している)な構造を宣言
console.log(getTriangle2(5, 2));
function getTriangle2(base, height) {
    return base * height / 2;
}; //エラーにならない

// 関数リテラル、functionコンストラクターは動的(プログラムの実行時に確定していない)構造を宣言
console.log(getTriangle3(5, 2));
var getTriangle3 = function (base, height) {
    return base * height / 2;
}; //エラーになる

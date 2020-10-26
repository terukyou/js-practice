// function命令
function getTriangle(base, height) {
    return base * height / 2;
}

// functionコンストラクター(非推奨)
var getTriangle = new Function('base', 'height', 'return base*height/2');

// 関数リテラル
var getTriangle = function (base, right) {
    return base * right / 2;
};

// アロー関数
let getTriangle = (base, height) => {
    return base * height / 2;
};
// 一文の時(引数ひとつ->()省略可、引数無し->()省略不可)
let getTriangle = (base, height) => base * height / 2;


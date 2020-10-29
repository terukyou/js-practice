var Animal = function () { };

var Hamster = function () { };
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

// constructor,instanceofは元の関数オブジェクトを取得
console.log(a.constructor === Animal); //true
console.log(h.constructor === Animal); //true
console.log(h.constructor === Hamster); //false(プロトタイプ継承)

// コンストラクタもプロトタイプも判定
console.log(h instanceof Animal); //true
console.log(h instanceof Hamster); //true

// isPrototypeOfは参照元のプロトタイプを確認
console.log(Hamster.prototype.isPrototypeOf(h)); //true
console.log(Animal.prototype.isPrototypeOf(h)); //true

// メンバーの有無を判定(in)
var obj = {
    hoge: function () { },
    foo: function () { },
};
console.log('hoge' in obj); //true
console.log('piyo' in obj); //false

// JSでは関数にクラスの役割を与えている
var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function () { //メソッドとみなされる 
        return this.lastName + this.firstName
    }
};
var mem = new Member('たけし', '山田'); //コンストラクター(オブジェクトを初期化)※アロー関数はできない
console.log(mem.getName());

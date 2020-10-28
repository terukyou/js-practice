var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function () { //Memberオブジェの原型がプロトタイプ
    return this.lastName + ' ' + this.firstName;
};
var m = new Member('さとし', '山田');
console.log(m.getName());
// プロトタイプを使う利点
// ・メソッドをコンストラクターに入れるよりプロトタイプの方がメモリの使用量が少ない！！(コンストラクターはコピーする度メソッドもコピー)
// 追加や変更をインスタンスがリアルタイムに認識可！！！

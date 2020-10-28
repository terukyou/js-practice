// インスタンスのメンバー追加や削除はプロトタイプに影響しない
// プロパティの変更
var Member = function () { };
Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();
console.log(mem1.sex + '|' + mem2.sex); //男❘男
mem2.sex = '女';
// プロトタイプの参照はインスタンスにあるか確認してから
console.log(mem1.sex + '|' + mem2.sex); //男|女

// プロパティの削除
delete mem1.sex //インスタンスになくてもプロトタイプまでは削除しにいかない
delete men2.sex
console.log(mem1.sex + '|' + mem2.sex); //男|男

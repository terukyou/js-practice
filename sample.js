// プロトタイプのメンバー削除
var Member = function () { };
Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();
console.log(mem1.sex + '|' + mem2.sex); //男❘男

// delete Member.prototype.sex; //すべてのインスタンスのsexプロパティも削除

mem2.sex = undefined; //「インスタンス単位」でプロトタイプのメンバーを削除
// →値を強制的に未定義にしているだけなのでsexプロパティは存在するものとして表示される

console.log(mem1.sex + '|' + mem2.sex); //男|undefined


var Member = function (firstName, lastName) {
    // if (!(this instanceof Member)) { //thisがMemberオブジェじゃない時(firstname,lastnameをグローバル変数として定義させない)
        // return new Member(firstName, lastName)
    // }
    this.firstName = firstName;
    this.lastName = lastName;
};

var m = Member('さとし', '山田');
console.log(m); //undefined
console.log(lastName); //'さとし',ifのコメを戻すとリファレンスエラーに
console.log(m.firstName); //エラー

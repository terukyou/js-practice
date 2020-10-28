var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.seal(this); //後からプロパティを追加・削除したらエラーとなる
};

var mem = new Member('たけし', '山田');
mem.getName = function () {
    return this.lastName + '' + this.firstName;
}
console.log(mem.getName());

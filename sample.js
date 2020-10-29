// 名前空間を定義(Wingsが未定義の時のみ)
var Wings = Wings || {};
Wings.Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
Wings.Member.prototype = {
    getName: function () {
        return this.lastName + '' + this.firstName;
    }
};

var mem = new Wings.Member('ひろし', '山田');
console.log(mem.getName()); //山田ひろし

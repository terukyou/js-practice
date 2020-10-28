var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
// オブジェクトリテラルでプロトタイプを定義
Member.prototype = {
    getName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    toString: function () {
        return this.lastName + this.firstName;
    }
};

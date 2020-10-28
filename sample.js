var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function () {
        return this.lastName + '' + firstName;
    }
};

var mem = new Member('たけし', '山田');
console.log(mem.getName());

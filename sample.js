var Animal = function () { };
Animal.prototype = {
    walk: function () {
        console.log('トコトコ');
    }
};

var Dog = function () {
    Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function () {
    console.log('わんわん');
}

var d = new Dog();
d.walk(); //トコトコ
d.bark(); //わんわん

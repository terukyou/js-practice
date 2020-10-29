function namespace(ns) {
    // 名前空間を「.」区切りで分割
    var names = ns.split('.');
    var parent = window;
    // 名前空間を上位から順に登録
    for (var i = 0, len = names.length; i < len; i++) {
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

var my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function () { };
var p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person); //true

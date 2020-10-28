var data = 'global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
    console.log(this.data);
}
hoge.call(null); //callメソッドでthisが何を指すのか指定できる
hoge.call(obj1);
hoge.call(obj2);

function hoge() { //callメソッドで配列っぽいオブジェクトを配列にできる
    var args = Array.prototype.slice.call(arguments); //arguments=配列風オブジェクト
    console.log(args.join('/'));
}
hoge('AngularK', 'React', 'Backbone');

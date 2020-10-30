document.addEventListener('DOMContentLoaded', function () {
    var data = {
        title: 'Javaポケットリファレンス',
        price: 2680,
        handleEvent: function () { //handleEventメソッドを作成することで↓
            console.log(this.title + '/' + this.price + '円');
        }
    };
    //第二引数にオブジェクトを指定できる(これがないとthisがボタン元からになる)
    document.getElementById('btn').addEventListener('click', data, false);
}, false);



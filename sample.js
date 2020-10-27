document.addEventListener('DOMContentLoaded', function () {
    var data = {
        title: 'Javaポケットリファレンス',
        price: 2680,
        show: function () {
            //ここのthisはオブジェクト自身じゃなくボタンを指している
            console.log(this.title + '/' + this.price + '円');
        }
    };
    document.getElementById('btn').addEventListener('click', data.show, false); //「/undefined円」
    document.getElementById('btn').addEventListener('click', data.show.bind(data), false); //「Javaポケットリファレンス/2680円」
}, false);



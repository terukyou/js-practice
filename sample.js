document.addEventListener('DOMContentLoaded', function () {
    var timer = window.setInterval(//setInterval:指定した時間ごとに繰り返し、setTimeout:指定した時間に一回だけ実行
        function () {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 500);
    document.getElementById('btn').addEventListener('click', function () {
        window.clearInterval(timer);
    }, false);
}, false);
// setTimeout/setInterval
// 引数に文字列を用いてはいけない、指定した時間に処理を実行するための待ち行列に登録、時間を0にしたとき
function hoge() {
    console.log('あいうえお');
    setTimeout(function () {//setTimeoutメソッドが処理をタイマーに引き渡している間にあいうえお、かきくけこを実行
        console.log('かきくけこ');
    }, 0);
    console.log('さしすせそ');
}
hoge();//あいうえお,さしすせそ,かきくけこ

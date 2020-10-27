document.addEventListener('DOMContentLoaded', function () {
    // タイマーを設置
    var timer = window.setInterval(function () {
        var dat = new Date();
        // 現在の時刻をresultに表示する
        document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 1000);

    // タイマー処理を中止
    document.getElementById('btn').addEventListener('click', function () {
        window.clearInterval(timer);
    }, false);
}, false);

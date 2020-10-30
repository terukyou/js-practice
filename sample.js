document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('loadstart', function () {
            result.textContent = '通信中...';
        });
        xhr.addEventListener('load', function () {
            result.textContent = xhr.responseText;
        }, false);

        xhr.addEventListener('error', function () {
            result.textContent = 'サーバーエラーが発生しました';
        })
        xhr.open('GET', 'sample.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);//GETなので指定なし
    }, false);
}, false);

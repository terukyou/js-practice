document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        console.log(document.getElementById('name').value);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    result.textContent = xhr.responseText;
                } else {
                    result.textContent = 'サーバーエラーが発生しました';
                }
            } else {
                result.textContent = '通信中...';
            }
        };
        xhr.open('GET', 'sample.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);
    }, false);
}, false);

var count = 0;
var result = document.getElementById('result');
document.getElementById('btn').addEventListener('click', function () {
    result.textContent = ++count;
    // 履歴を追加
    history.pushState(count, null, 'file:///C:/xampp/htdocs/git/js-practice/sample.html?' + count);
});
// 戻るボタンでページを前の状態に戻す
window.addEventListener('popstate', function (e) {
    count = e.state;
    result.textContent = count;
});

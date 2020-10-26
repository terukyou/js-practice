document.addEventListener('DOMContentLoaded', function () {
    // HTML文字列として認識しない
    document.getElementById('result_text').textContent = '<a href="https://wings.msn.to/">WINGSプロジェクト</a>';
    // HTML文字列として認識
    document.getElementById('result_html').innerHTML = '<a href="https://wings.msn.to/">WINGSプロジェクト</a>';
}, false);

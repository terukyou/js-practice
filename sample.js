// ページロード時に実行されるイベントリスナー(同一要素の同一イベントに対しても複数紐づけできる)を登録
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () { //btnクリック時に実行されるイベントリスナー
        window.alert('ボタンがクリックされました');
    }, false);
}, false);

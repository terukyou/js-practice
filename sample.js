// ページロード時に実行されるイベントハンドラー(イベントに対応してその処理内容を定義するコードの塊)を登録
window.onload = function () {
    // btnをクリックした時に実行されるイベントハンドラーを登録
    document.getElementById('btn').onclick = function () {
        window.alert('ボタンがクリックされました');
    }
}

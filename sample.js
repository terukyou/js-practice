// idをキーに要素を取得
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

// ページの全てのアンカータグを取得
var list = document.getElementsByTagName('a');
// hrefをログに出力
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}

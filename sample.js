// idがlist配下のexternalクラスのみ抽出
var list = document.querySelectorAll('#list .external');
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
}

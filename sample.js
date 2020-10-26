// select#foodを取得
var s = document.getElementById('food');
// 要素直下のノード群取得
var opts = s.childNodes;
for (var i = 0, len = opts.length; i < len; i++) {
    var opt = opts.item(i);
    if (opt.nodeType === 1) { //要素以外も取得できるので要素のみ抽出
        console.log(opt.value);
    }
}

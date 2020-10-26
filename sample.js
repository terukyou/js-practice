// select#foodを取得
var s = document.getElementById('food');

// firstChild/nextSibling
var child = s.firstChild;
while (child) { //子ノードがある限りループ
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    child = child.nextSibling; //次の子ノードの取得
}

// firstElementChild/nextElementSibling
var child2 = s.firstElementChild; //要素のみ取得できるのでif(chiled.nodeType===1は必要なし)
while (child2) {
    console.log(child2.value);
    child2 = child2.nextElementSibling;
}

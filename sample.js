document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById('btn').addEventListener('click',
            function () {
                // テキストボックスを取得
                var name = document.getElementById('name');
                var url = document.getElementById('url');
                // <a>要素を生成
                var anchor = document.createElement('a');
                anchor.href = url.value;
                // テキスとノードを生成、aの直下に追加
                var text = document.createTextNode(name.value);
                anchor.appendChild(text);

                var br = document.createElement('br');
                var list = document.getElementById('list');
                list.appendChild(anchor);
                list.appendChild(br);
            }, false);
    }, true);

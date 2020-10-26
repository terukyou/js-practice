document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById("file").addEventListener('change',
            function (e) {
                // 単一選択なので、0で決め打ち
                var input = document.getElementById("file").files[0];
                var reader = new FileReader();
                // テキストファイルの内容を取得
                reader.addEventListener('load', //ファイルの読み込みが実行されてるわけじゃない
                    function () {
                        document.getElementById("result").textContent = reader.result;
                    }, true);
                reader.addEventListener('error', //エラーが発生したとき
                    function () {
                        console.log(reader.error.message);
                    }, true);
                reader.readAsText(input, 'UTF-8'); //ファイルの読み込み
                reader.abort();
            })
    }, true);

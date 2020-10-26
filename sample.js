document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById("file").addEventListener('change',
            function () {
                var inputs = document.getElementById("file").files;
                for (var i = 0, len = inputs.length; i < len; i++) {
                    var input = inputs[i];
                    console.log('ファイル名:' + input.name);
                    console.log('種類:' + input.type);
                    console.log('サイズ:' + input.size);
                    console.log('最終更新日:' + input.lastModifiedDate);
                }
            })
    }, true);

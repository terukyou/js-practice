document.addEventListener('DOMContentLoaded',
    function () {
        var elem = document.getElementById('elem');
        elem.addEventListener('click', // マウスが乗った時
            function () {
                // 条件演算子不要、文字列の分割不要
                this.classList.toggle("highlight");
            }, false);
    }, false);



document.addEventListener('DOMContentLoaded',
    function () {
        // ラジオボタンの初期値の設定
        var setRadioValue = function (name, value) {
            var elems = document.getElementsByName(name);
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems.item(i);
                if (elem.value === value) { //値が初期値を同じとき
                    elem.checked = true;
                    break;
                }
            }
        };
        setRadioValue('food', '餃子');
        var getRadioValue = function (name) {
            var result = '';
            var elems = document.getElementsByName(name);
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems.item(i);
                if (elem.checked) {
                    result = elem.value;
                    break; //チェックは一つしかないからここでストップ
                }
            }
            return result;
        };
        document.getElementById('btn').addEventListener('click',
            function () {
                window.alert(getRadioValue('food'))
            }, false);
    }, false);

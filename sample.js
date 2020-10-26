document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById('btn').addEventListener('click', //btnをクリックしたとき
            function () {
                var result = []; //選択値を格納するための配列
                var foods = document.getElementsByName('food');
                for (var i = 0, len = foods.length; i < len; i++) {
                    var food = foods.item(i);
                    if (food.checked) { //チェックの状態か確認
                        result.push(food.value);
                    }
                }
                window.alert(result.toString());
            }, false);
    }, false);

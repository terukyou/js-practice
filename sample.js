document.addEventListener('DOMContentLoaded', function () {
    var getSelectValue = function (name) {
        var result = [];
        var elems = document.getElementById(name).options;
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            if (elem.selected) {
                result.push(elem.value);
            }
        }
        return result;
    }
    document.getElementById('btn').addEventListener('click', function () {
        window.alert(getSelectValue('food'));
    }, false);
}, false);


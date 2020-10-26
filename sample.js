document.addEventListener('DOMContentLoaded', function () {
    // #logoを取得
    var logo = document.getElementById('logo');
    // img要素に含まれる属性リストを取得
    var attrs = logo.attributes;
    for (var i = 0, len = attrs.length; i < len; i++) {
        attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value); //id:logo
    }
}, false);

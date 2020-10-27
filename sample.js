document.addEventListener('DOMContentLoaded',
    function () {
        var elem = document.getElementById('elem');
        elem.addEventListener('mouseover', // マウスが乗った時
            function () {
                this.style.backgroundColor = 'Yellow';
            }, false);
        elem.addEventListener('mouseout', //マウスが外れた時
            function () {
                this.style.backgroundColor = "";
            })
    }, false);



document.addEventListener('DOMContentLoaded',
    function () {
        var elem = document.getElementById('elem');
        elem.addEventListener('click', // マウスが乗った時
            function () {
                this.className = (this.className === 'highlight' ? '' : 'highlight');
            }, false);
    }, false);



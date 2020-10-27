document.addEventListener('DOMContentLoaded',
    function () {
        var elem = document.getElementById('elem');
        elem.addEventListener('click', // マウスが乗った時
            function () {
                // 空白区切りの文字列を分割
                var classes = this.className.split(' ');
                // highlightが存在する位置を検出
                var index = classes.indexOf('highlight');
                console.log(index);
                if (index === -1) {
                    classes.push('highlight');
                } else {
                    classes.splice(index, 1);
                }
                this.className = classes.join(' ');
            }, false);
    }, false);



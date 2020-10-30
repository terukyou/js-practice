document.addEventListener('DOMContentLoaded', function () {
    var Counter = function (elem) {
        this.count = 0;
        this.elem = elem;
        //アロー関数で描くことでthisがCounterオブジェの中のthisになる
        // アロー関数じゃないとthisはボタン元のthisに...
        elem.addEventListener('click', () => {
            this.count++;
            this.show();
        }, false);
    };

    Counter.prototype.show = function () {
        console.log(this.elem.id + 'は' + this.count + '回クリックされました');
    }
    var c = new Counter(document.getElementById('btn'));
}, false);



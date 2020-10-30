document.addEventListener('DOMContentLoaded', function () {
    //false→パブリングフェーズ(発生元の下位要素から上位要素へイベントを伝播)#inner#inner2#outer
    //true→キャプチャフェーズ(windowオブジェから下位要素にイベントを伝播)#outer#inner#inner2
    document.getElementById('inner').addEventListener('click', function (e) {
        window.alert('#inner リスナーが発生しました');
        // e.stopPropagation(); //#inner #inner2が発生
        // e.stopImmediatePropagation(); //#innerだけ発生
        // e.preventDefault();//#inner#inner2#outerが発生するが、リンクは飛ばない
    }, false);
    document.getElementById('inner').addEventListener('click', function (e) {
        window.alert('#inner リスナー2が発生しました');
    }, false);
    document.getElementById('outer').addEventListener('click', function (e) {
        window.alert('#outer リスナーが発生しました');
    }, false);
}, false);



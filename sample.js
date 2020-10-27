document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById('inner').addEventListener('click',
            function (e) {
                window.alert('#innerリスナーが発生');
                // e.stopPropagation(); //#outerリスナーが発生のやつがキャンセル
            }, false);
        document.getElementById('inner').addEventListener('click',
            function (e) {
                window.alert('#inner2リスナーが発生');
            }, false);
        document.getElementById('outer').addEventListener('click',
            function (e) {
                window.alert('#outer リスナーが発生しました');
            }, false);
    }, false);



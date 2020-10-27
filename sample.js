function hoge() {
    console.log('あいうえお');
    setTimeout(function () {
        console.log('かきくけこ');
    }, 3000); //3秒後に「かきくけこ」
    console.log('さしすせそ');
}
hoge();

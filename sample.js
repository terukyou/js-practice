console.log('初めまして、私は %s です。 %d 歳です。', '山田太郎', 30);

// groupからgroupEndまでひとまとめで表示してくれる
console.group('上位グループ');
for (var i = 0; i < 3; i++) {
    console.group('下位グループ' + i);
    for (var j = 0; j < 3; j++) {
        console.log(i, j);
    }
    console.groupEnd();
}
console.groupEnd();

// 何回実行されたかカウント
for (var i = 0; i < 3; i++) {
    for (var i = 0; i < 3; i++) {
        console.count('LOOP');
    }
    console.count('LOOP');
}

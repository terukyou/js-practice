function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値:${value};`);
            } else {
                reject('入力は空です');
            }
        }, 500);
    });
}
// すべての処理が成功したときコールバック(all)
Promise.all([
    asyncProcess('トクジロウ'),
    asyncProcess('ニン'),
    asyncProcess('サン')
]).then(
    response => {
        console.log(response); //0: "入力値:トクジロウ;"1: "入力値:ニン;"2: "入力値:サン;"
    },
    error => {
        console.log(`エラー:${error}`);
    }
);
// いずれ一つが最初に完了したらコールバック(race)
Promise.race([
    asyncProcess('トクジロウ'),
    asyncProcess('ニン'),
    asyncProcess('サン')
]).then(
    response => {
        console.log(response); //0: "入力値:トクジロウ;"1: "入力値:ニン;"2: "入力値:サン;"
    },
    error => {
        console.log(`エラー:${error}`); //入力値:トクジロウ;
    }
);

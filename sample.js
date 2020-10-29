let data_ary = ['one', 'two', 'three'];
// [Symbol.iterator]メソッドは配列の要素を列挙する
let itr = data_ary[Symbol.iterator]();
let d;
while (d = itr.next()) { //配列の次の要素を取り出す
    if (d.done) { break; }
    console.log(d.done); //false,false,false 次の要素がないか
    console.log(d.value); //one,two,three 次の要素の値
}

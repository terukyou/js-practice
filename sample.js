// statusで静的メソッドを定義できる
class Area{
    static getTriangle(base, height) {
        return base * height / 2;
    }
}
a = new Area();
console.log(Area.getTriangle(10,5)); //25
console.log(a.getTriangle(10,5)); //エラー

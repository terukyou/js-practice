// プライベートメンバーはコンストラクター関数で定義 varで宣言(thisを使わない)
// 特権メソッドを定義プライベートメンバーにアクセス
function Triangle() {
    // プライベートプロパティの定義
    var _base;
    var _height;
    // プライベートメソッドの定義
    var _checkArgs = function (val) {
        return (typeof val === 'number' && val > 0);
    }
    // プライベートメンバーにアクセスするためのメソッドを定義
    this.setBase = function (base) {
        if (_checkArgs(base)) {
            _base = base;
        }
    }
    this.getBase = function () {
        return _base;
    }
    this.setHeight = function (height) {
        if (_checkArgs(height)) {
            _height = height;
        }
    }
    this.getHeight = function () {
        return _height;
    }
}

Triangle.prototype.getArea = function () {
    return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea()); //NaN

t.setBase(10);
t.setHeight(2);
console.log(t.getBase()); //10
console.log(t.getHeight()); //2
console.log(t.getArea()); //10

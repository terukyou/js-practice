// プライベートメンバーはコンストラクター関数で定義 varで宣言(thisを使わない)
// 特権メソッドを定義プライベートメンバーにアクセス
function Triangle() {
    // プライベートプロパティの定義
    var _base;
    var _height;
    // アクセサリーメソッドをまとめる
    Object.defineProperties(
        this, {
        base: {
            // ゲッターメソッド(参照用のメソッド)
            get: function () {
                return _base;
            },
            // セッターメソッド(設定用のメソッド)
            set: function (base) {
                if (typeof tmp === 'number' && base > 0) {
                    _base = base;
                }
            }
        },
        height: {
            get: function () {
                return _height;
            },
            set: function (height) {
                if (typeof tmp === 'number' && height > 0) {
                    _height = height;
                }
            }
        }
    }
    );
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

const AUTHOR = 'YAMADA, Yoshihiro';

// アプリを昨日単位に纏めるモジュール
export class Member {
    // コンストラクタの定義
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // プロパティの定義
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    // メソッドの定義
    getName() {
        return this.lastName + this.firstName;
    }
};
export class Area {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}

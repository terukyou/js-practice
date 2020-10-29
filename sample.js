class Member {
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
}

let m = new Member('太郎', '山田');
console.log(m.getName());

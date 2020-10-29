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
// クラスの継承
class BusinessMember extends Member{
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName); //基底クラスにプロパティの設定をゆだねる
        this.clazz = clazz;
    }
    getName() { //MemberのgetNameを上書き
        return super.getName() + '　役職:' + this.clazz;
    }
    work() {
        return this.getName() + 'は働いています';
    }
}
let bm = new BusinessMember('太郎', '山田','課長');
console.log(bm.getName());
console.log(bm.work());

class Member {
    // コンストラクタの定義
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // メソッドの定義
    getName() {
        return this.lastName + this.firstName;
    }
}

let m = new Member('太郎', '山田');
console.log(m.getName());

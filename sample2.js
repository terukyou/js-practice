// まとめて指定(asで別名指定)
// import *as app from './sample.js';
// var m = new app.Member('太郎', '山田');

// ここの要素に別名指定
import {Member as MyMember,Area as MyArea} from './sample.js';
var m = new MyMember('太郎', '山田');
console.log(m.getName());

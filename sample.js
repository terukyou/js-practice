var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

var list = document.getElementsByTagName('a');
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}
var nam = document.getElementById('time');
nam.value = current.toLocaleString();

var list2 = document.getElementsByClassName('my');
for (var i = 0, len = list2.length; i < len; i++) {
    console.log(list2.item(i).href);
}

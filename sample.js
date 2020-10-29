document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file').addEventListener('change', function (e) {
        var input = document.getElementById('file').files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            document.getElementById('result').src = reader.result;
            console.log(reader.result);
        }, true);
        reader.readAsDataURL(input);
    }, true);
}, false);

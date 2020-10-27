window.onload =
    function () {
        var btn = document.getElementById('btn');
        btn.onclick =
            function () {
                window.alert('こんにちは世界');
            };
        btn.onclick = null;

    }

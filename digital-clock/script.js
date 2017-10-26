(function() {
    function addZeroBefore(v) {
        return +v < 10 ? "0" + +v : v;
    }

    function showTime() {
        
        var today = new Date();
        var textTime = addZeroBefore(today.getHours()) + " : " + addZeroBefore(today.getMinutes()) + " : " + addZeroBefore(today.getSeconds());

        document.getElementById("time").innerHTML = textTime;

        setTimeout(function() {
            showTime()
        }, 1000);
    }

    showTime();
})();
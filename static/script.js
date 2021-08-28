
var val = 20;

setInterval(function() {
    val--;


    if (val >= 0) {
        id = document.getElementById("time");
        id.innerHTML = val;
    }
    
    if (val == 0) {
        function next() {
            document.getElementById("next").click();
        }
        
        next();
    }
    
},1000);
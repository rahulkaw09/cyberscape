const button =document.querySelector("button");
button.addEventListener("click", function () {
    var ajaxx = new  XMLHttpRequest();
    var methodd= "GET";
    var urll= "login.php";
    var async= true;
    ajaxx.open(methodd,urll,async);

    // send ajax request
    ajaxx.send();

    //rec response from login.php
     ajaxx.onreadystatechange= function () {
        if (this.readyState==4 && this.status==200) {
            window.location.href="login.php";
        }
    }

});
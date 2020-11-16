let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
let a1 = letters[Math.floor(Math.random() * letters.length)] ;
let b2 = letters[Math.floor(Math.random() * letters.length)] ;
let c3 = letters[Math.floor(Math.random() * letters.length)] ;
let d4 = letters[Math.floor(Math.random() * letters.length)] ;

let codes = a1 + b2 + c3 + d4  ;
let captcha_cont = document.getElementById("captcha_box");
captcha_cont.innerHTML= codes;

localStorage.setItem("username","rahul");
localStorage.setItem("password","rahul");

let local_user =localStorage.getItem("username");
let local_pass = localStorage.getItem("password");

let button = document.getElementById("btn-login").addEventListener("click",run);

    function run(e) {
        e.preventDefault();
        let user_input = document.getElementById("Usern").value;
        let user_pass= document.getElementById("Pass").value;
        let user_captcha= document.getElementById("Captchab").value;

        if( local_user == user_input || local_pass==user_pass || user_captcha === codes){
            window.location.href="finallibrary.html"
            }
         else{
        alert("invalid credentials");
        }
    }
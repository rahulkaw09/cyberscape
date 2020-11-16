let timeWarning = 60000;
let toutNow =120000;
let logout_Url = 'index.html';

let warTimer;
let toutTimer;


function start_Timers() {
    warTimer = setTimeout("IdleWarning()", timeWarning);
    toutTimer = setTimeout("Idle_Timeout()", toutNow);
}

function reset_Timers() {
    clearTimeout(warTimer);
    clearTimeout(toutTimer);
    start_Timers();
}


function IdleWarning() {
    alert("you will be logged out after one minute");
}


function Idle_Timeout() {
    window.location = logout_Url;
}
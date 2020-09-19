//Display DATE with TIME AND ZONE
document.getElementById("conta").innerHTML = new Date();

// Add an event listener to the submit button
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

// function to play the alarm ring tone
var au = new Audio(src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_emergency_alarm_small_siren_44509.mp3?_=1");

function ring() {
    au.play();
}
// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmD = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmD}`);
    now = new Date();

    let tAlarm = alarmD - now;
    console.log(tAlarm);

    if(tAlarm>=0){
        setTimeout(() => {
            console.log("buzzing")
            ring();
        }, tAlarm);
    }
}

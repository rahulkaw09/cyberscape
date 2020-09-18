//Display DATE with TIME AND ZONE
document.getElementById("conta").innerHTML = new Date();

// Add an event listener to the submit button
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

// function to play the alarm ring tone
var audio = new Audio(src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_emergency_alarm_small_siren_44509.mp3?_=1");

function ring() {
    audio.play();
}
// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeAlarm = alarmDate - now;
    console.log(timeAlarm);

    if(timeAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ring();
        }, timeAlarm);
    }
}

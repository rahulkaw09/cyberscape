let counter= document.getElementById("fine_result");
let button = document.getElementById("cal_fine").addEventListener("click",calculatefine);

function calculatefine() {
    let fine = document.getElementById("fine_rs").value;
    let day = 5;
    let days_fine = day * fine;
    console.log(days_fine);

    setInterval(counters,1);

    function counters() {
            counter.innerText=days_fine;
        }
}
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var minuteInput = document.getElementById("minute");
var secondInput = document.getElementById("second");

resetButton.addEventListener('click', () => {
    minute.innerText = "00";
    second.innerText = "00";
})


startButton.addEventListener('click', () => {
    let minute = minuteInput.textContent;
    let second = secondInput.textContent;

    startButton.disabled = true;
    stopButton.disabled = false;

    startInterval = setInterval(() => {
        if (minute > 0) {
            minute = minute - 1;
            console.log(minute)
            minuteInput.textContent= minute;        }
    }, 1000);
})

stopButton.addEventListener('click', ()=>{
    clearInterval(startInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
})



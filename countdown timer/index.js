var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var minuteInput = document.getElementById("minute");
var secondInput = document.getElementById("second");


startButton.addEventListener('click', () => {
    let minute = parseInt(minuteInput.textContent);
    let second = parseInt(secondInput.textContent);

    startInterval = setInterval(() => {
        if (minute === 0 && second ===0) {
            clearInterval(startInterval);
            startButton.disabled = false;
            stopButton.disabled = true;
            minuteInput.innerText = "00";
            secondInput.innerText = "00";
            return;
        }

        if (minute > 0) {
            startButton.disabled = true;
            stopButton.disabled = false;
            minute = minute - 1;
            console.log(minute)
            minuteInput.textContent = minute;
        }

        if(second && second<60){
            second = second - 1;
            console.log(second)
            secondInput.textContent = second;
        }

    }, 1000);
})

stopButton.addEventListener('click', () => {
    clearInterval(startInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
})

resetButton.addEventListener('click', () => {
    minute.innerText = "00";
    second.innerText = "00";
})



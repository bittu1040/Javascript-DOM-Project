let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.querySelector(".display").textContent = display;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);

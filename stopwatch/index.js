let timer = null;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.getElementById("startStop").addEventListener("click", function () {
  if (isRunning) {
    watchStop();
    isRunning = false;
    startStop.textContent = "Start";
  } else {
    watchStart();
    isRunning = true;
    startStop.textContent = "stop";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  watchReset();
});

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const display =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  document.querySelector(".display").textContent = display;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".display").textContent = "00:00:00";
  startStop.textContent = "Start";
}

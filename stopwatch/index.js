let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;


document.getElementById("startStop").addEventListener("click", function(){
    setInterval(() => {
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
        const display=hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')+':' + seconds.toString().padStart(2, '0');
        document.querySelector(".display").textContent = display;

    }, 1000);
});

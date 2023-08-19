
let startGenerateNumber;
let startGenerateColor;


document.getElementById('start').addEventListener("click", () => {
    if(!startGenerateNumber){
        startGenerateNumber = setInterval(generateRandomNumber, 100);
    }
})

document.getElementById('stop').addEventListener("click", () => {
    clearInterval(startGenerateNumber);
    startGenerateNumber= null;
});

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById('randomNumber').innerHTML = randomNumber;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    document.body.style.backgroundColor = getRandomColor();

}

document.getElementById('startColor').addEventListener("click", () => {
    if(!startGenerateColor){
        startGenerateColor = setInterval(changeColor, 100);
    }
})

document.getElementById('stopColor').addEventListener("click", () => {
    clearInterval(startGenerateColor);
    startGenerateColor= null;
});

document.getElementById('resetColor').addEventListener('click', ()=>{
    location.reload();
})
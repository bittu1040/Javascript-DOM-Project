
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener("click", counter);
});

function counter(e){
    console.log(e.target.id);
    if(e.target.id==="increase"){
        document.getElementById("counter").innerHTML= +document.getElementById("counter").innerHTML+1;
    }
    if(e.target.id==="decrease"){
        document.getElementById("counter").innerHTML= +document.getElementById("counter").innerHTML-1;
    }
    if(e.target.id==="reset"){
        document.getElementById("counter").innerHTML= 0;
    }
}
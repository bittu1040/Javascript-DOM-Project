const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.body');

console.log(buttons)
console.log(body)


//way 1

/*
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(e.target.id)
        if (e.target.id === "grey") {
            body.style.backgroundColor = "grey"
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = "white"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
        }
    })
});
*/


//way 2:  refactored 

buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
});

function changeColor(e) {
    console.log(e.target);
    console.log(e.target.id);
    if (e.target.id === "grey") {
        body.style.backgroundColor = "grey"
    }
    if (e.target.id === "white") {
        body.style.backgroundColor = "white"
    }
    if (e.target.id === "blue") {
        body.style.backgroundColor = "blue"
    }
    if (e.target.id === "yellow") {
        body.style.backgroundColor = "yellow"
    }
}






// document.getElementById("grey").addEventListener("click",(e)=>{
//     console.log(e.target)
// })

// document.getElementById("grey").addEventListener("click", changeColor);

// function changeColor(){
//     body.style.backgroundColor = "grey"
// }

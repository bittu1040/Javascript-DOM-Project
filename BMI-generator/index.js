const form = document.querySelector('form');

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const height = document.getElementById("height").value
//     const weight = document.getElementById("weight").value
//     console.log(height, weight)
// });

document.getElementById('calculate').addEventListener('click', (e) => {
    e.preventDefault()
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value
    console.log(height, weight)

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
        window.alert("empty value")
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
        window.alert("empty value")
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

document.getElementById('reset').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("height").value="";
    document.getElementById("weight").value="";

        results.innerHTML = 0
    
});


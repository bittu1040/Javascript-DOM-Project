let countries = [
    "United States",
    "China",
    "India",
    "Brazil",
    "Russia",
    "Indonesia",
    "Pakistan",
    "Nigeria",
    "Bangladesh",
    "Mexico",
    "Japan",
    "Philippines",
    "Ethiopia",
    "Vietnam",
    "Egypt",
    "DR Congo",
    "Turkey",
    "Iran",
    "Germany",
    "Thailand",
];


function pupolateCountry(countries) {
    document.getElementById("ul").innerHTML = "";
    countries.forEach((country) => {
        let li = document.createElement("li");
        li.innerText = country;
        document.getElementById("ul").appendChild(li);
    })
}

pupolateCountry(countries)

let search = document.getElementById("search");

search.addEventListener("keyup", function(){
    let inputValue = search.value.toUpperCase();
    console.log(inputValue)
    let filteredCountries = countries.filter((country)=>{
        return country.toUpperCase().includes(inputValue)
    })
    pupolateCountry(filteredCountries)
});

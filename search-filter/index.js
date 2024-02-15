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



let details=[
    {name:"Bittu",age:22,city:"kolkata"},
    {name:"ramesh",age:23,city:"blr"},
    {name:"pawan",age:24,city:"delhi"},
    {name:"roshan",age:25,city:"bom"},
]

let filteredData= details.filter((data)=>{
    return data.age>23
})

filteredData.forEach((data)=>{
    let div= document.createElement("div");
    div.innerText=data.name + " " + data.age + " " + data.city;
    document.getElementById('get-details').appendChild(div)
})
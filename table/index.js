var peopleData = [
    { name: "John", age: 30, city: "New York", email: "john@example.com", occupation: "Engineer" },
    { name: "Alice", age: 45, city: "Los Angeles", email: "alice@example.com", occupation: "Designer" },
    { name: "Bob", age: 35, city: "Chicago", email: "bob@example.com", occupation: "Teacher" },
    { name: "Emma", age: 28, city: "San Francisco", email: "emma@example.com", occupation: "Doctor" },
    { name: "Mike", age: 40, city: "Seattle", email: "mike@example.com", occupation: "Developer" }
  ];


function populateTable(data){
    let tableBody= document.getElementById("data-table");
    tableBody.innerHTML="";
    data.forEach((person)=>{
        let row= document.createElement("tr");
        row.innerHTML= `<td>${person.name}</td> <td>${person.age}</td> <td>${person.city}</td> <td>${person.email}</td> <td>${person.occupation}</td>`;
        tableBody.appendChild(row);
    })
}


populateTable(peopleData);
// sortByAge(peopleData);  // if you want default sorting by age


document.getElementById("sortByName").addEventListener("click", ()=>{
    sortByName(peopleData)
})

document.getElementById("sortByAge").addEventListener("click", ()=>{
    sortByAge(peopleData)

})


function sortByName(data){
    data.sort((a,b)=>{
        if(a.name<b.name){
            return -1
        }
        if(a.name>b.name){
            return 1
        }
        return 0
    })
    populateTable(data)
}

function sortByAge(data){
    data.sort((a,b)=>{
        return a.age-b.age
    })
    populateTable(data)
}
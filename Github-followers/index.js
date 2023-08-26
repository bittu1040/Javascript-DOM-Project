



function getUsersFromGitHub(user) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
//   getUsersFromGitHub('bittu1040')
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log("Error:", error.message);
//       alert("wrong user details")
//     });


    document.getElementById("submit").addEventListener('click', ()=>{
       const userName= document.getElementById('userInput').value
       getUsersFromGitHub(userName)
       .then(data => {
         console.log(data);
         document.getElementById('name').innerHTML= data.name?data.name: "empty" ;
         document.getElementById('bio').innerHTML= data.bio ? data.bio: "empty";
         document.getElementById('company').innerHTML= data.company ? data.company : "empty" ;
         document.getElementById('location').innerHTML= data.location ? data.location: "empty";
         document.getElementById('followers').innerHTML= data.followers ?data.followers:"0" ;
         document.getElementById('following').innerHTML= data.following ?data.following:"0" ;
         document.getElementById('public_repos').innerHTML= data.public_repos ? data.public_repos: "0";
         document.getElementById('profile_img').src=data.avatar_url;
         document.getElementById('follow').href= data.html_url;

       })
       .catch(error => {
         console.log("Error:", error.message);
         document.getElementById('wrongDetails').innerHTML="Please enter correct User ID";
       });
    });

// id, name, projects


// callback
/*
function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading data");
        console.log("id:", id);
        const user = { id, name: `User ${id}` };
        console.log('before callback function called')
        callback(user, getListOfProjects);
        console.log('after callback function called')
    }, 2000);
}

function getUserName(user, callback) {
    const userss = user;
    console.log("username",userss);
    const projects= ["project1", "project2", "project3"];
    callback(projects)
}

function getListOfProjects(project){
    const projects = project;
    console.log("projects", projects)
}

getUser(1, getUserName);

*/

// promise

/*
function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("reading data");
            console.log("id: ", id);
            const user= {id, name: `user ${id}`};
            resolve(user)
        }, 2000);
    })
}

function getUserName(user){
    return new Promise((resolve, reject)=>{
        const userss= user;
        const project= [`project1${userss.name}`, 'project2', 'project3'];
        resolve(project)
    })
}

function getListOfProjects(project){
    return new Promise((resolve, reject)=>{
        const projectData= project;
        console.log("projects", projectData);
        resolve(projectData)
    })
}
*/

//through .then and .catch

/*
getUser(2)
        .then(getUserName)
        .then(getListOfProjects)
        .then((project)=>{
            console.log(project)
        }).catch((error)=>{
            console.log(error)
        });

getUser(1)
  .then((user) => {
    console.log("User retrieved:", user);
    return getUserName(user);
  })
  .then((projects) => {
    console.log("User's projects retrieved:", projects);
    return getListOfProjects(projects);
  })
  .then((projects) => {
    console.log("All data retrieved:", projects);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

*/


// through async-await

/*
async function main() {
    try {
      const user = await getUser(1);
      const projects = await getUserName(user);
      getListOfProjects(projects);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();

*/





// general example 

/*
function first() {
    console.log("hello");
}

function second() {
    console.log("bye");
}

first();
second();
*/

// function with asynchronous task
// even if first is called first then also bye is coming first and it is taking 1 second to execute

/*
function first() {
    setTimeout(() => {
        console.log("hello");
    }, 1000);
}

function second() {
    console.log("bye");
}

first();
second();

// result:  
// bye 
// hello
*/

// now we want to print hello first even if it takes more time.
/*
function first(cb) {
    setTimeout(() => {
        console.log("hello");
        cb();
    }, 2000);
}

function second() {
    console.log("bye");
}

first(second);
//hello bye
*/



// JS callback example

// example-1

/*
function add(a,b){
    console.log("add")
    return a+b;}
    
    function multi(a,b){
    return a*b;
    }
    
    function subs(a,b){
    return a-b;
    }
    
    function calc(a,b,callback1){
    const res= callback1(a,b);
    console.log("calc");
    return res
    }
    
    let res= calc(3,4,add);
    
    let res1= calc(res,2, multi);
    
    let res2= calc(res1, 5, subs)
    
    console.log(res2)
*/


// example 2

/*
    function addtwo(a,b){
        return a+b;
    }

    function addNumberInArray(array, callback){
        console.log("array input", array)
        let newArr= []
        array.forEach((data)=>{
            newArr.push(callback(data, 2))
        })
        return newArr
    }


    console.log(addNumberInArray([1,2,3,4], addtwo))

*/








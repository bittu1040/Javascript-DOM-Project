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
        resolve(projectData)
    })
}

// getUser(2)
//         .then(getUserName)
//         .then(getListOfProjects)
//         .then((project)=>{
//             console.log(project)
//         }).catch((error)=>{
//             console.log(error)
//         });

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










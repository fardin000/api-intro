//////////////////////////////////////
// Example : function called by onother function
//////////////////////////////////////
// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }
// function displayUsers(data){ // parameter pass na korle console kaj korbe na
//     console.log(data);
// }



//////////////////////////////////////
// Example : function called by onother function
// Example : using for...of loop
//////////////////////////////////////
// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }
// function displayUsers(data){ // parameter pass na korle console kaj korbe na
//     // console.log(data);
//     for(const user of data){
//         console.log(user);
//     }
// }




//////////////////////////////////////
// Example :   SAME FUNCITION WITH DIFFERENTT PARAMETER NAME
//////////////////////////////////////
// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }
// function displayUsers(users){ // parameter pass na korle console kaj korbe na
//     // console.log(data);
//     for(const user of users){
//         console.log(user);
//     }
// }




////////////////////////////////////////////////////////////////
// Example :   same function ACCESSING different object PROPERTY
////////////////////////////////////////////////////////////////
// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }
// function displayUsers(data){
//     for(const user of data){
//         console.log(user.name);
//     }
// }





////////////////////////////////////////////////////////////////////
// Example :   same function ACCESSING objets and CREATING  elements
////////////////////////////////////////////////////////////////////

// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }
// function displayUsers(data){
//     const ul = document.getElementById('users');
//     for(const user of data){
//         // console.log(user.name);
//         const li = document.createElement('li');
//         // li.innerText = 'new User';
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }




////////////////////////////////////////////////////////////////////
// Example :   same function ACCESSING objets with TEMPLATE STRING
////////////////////////////////////////////////////////////////////

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}
function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = 'new User';
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}
//recommended H.W
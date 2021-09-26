// console.log('api connected');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .then(json => console.log(json.userId))
//   .then(json => console.log(json.title))
//   .then(json => console.log('ami kichu ekta likhci'))
//stringified hole object property gula (" ") er moddhe chole ashe , property value gula kintu ashena ("") er moddhe 




///////////////////////////
// eta onclick method
///////////////////////////
  function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    // .then(json => console.log(json.title))
  }



///////////////////////////
// eta onclick method
///////////////////////////
// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data)) //2 vabei lekha jay , bujhte hobe just
//     .then(json => console.log(json)) //2 vabei lekha jay , bujhte hobe just
// }



///////////////////////////
// eta onclick method
///////////////////////////
// function loadUsers(){
//     // console.log('users');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }



///////////////////////////
// eta onclick method
///////////////////////////
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
}



///////////////////////////
//  function call method
///////////////////////////
// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }
// //calling the function form outside
// loadPosts();
 




// async await ki ??????????????
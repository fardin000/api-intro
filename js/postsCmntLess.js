
/////////////////////////
//just checking/////////
////////////////////////
// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => displayPosts(data))
// }
// loadPosts();//call na korle kaj hobena

// function displayPosts(posts){ //jekono namei parameter receive kora jabe
//     console.log(posts);   
// }


/////////////////////////////////
//// function used by html and css 
//////////////////////////////////
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

loadPosts();//call na korle kaj hobena

function displayPosts(posts){ //jekono namei parameter receive kora jabe
   
    const postContainer = document.getElementById('posts');
    for(const post of posts){
       
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);
    }
}



/////////////////////////////
///creating a new post///////
/////////////////////////////

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body: JSON.stringify({
            title: 'My new posts',
            body: 'This is my posts',
            userId: 1
        }),
        headers:{
            'content-type': 'application/json; charset-UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
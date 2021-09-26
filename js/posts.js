function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayPosts(data))
    // .then(data => displayPosts(data))
    //(data) chara onno parameter deya jabena
}

loadPosts();
//function ke call korle ta display korbe console e 
//abar button e onclick use kore call koreo show kora jete pare 


function displayPosts(posts){ //jekono namei parameter receive kora jabe
    // console.log(posts);
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        // console.log(post);
        const div = document.createElement('div');//100 posts er jonne 100 ta div banabo

        div.classList.add('post');//class list e post add na korle html file er (.post) er style apply hobena 
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;//div er moddhe ki ki thakbe ta likhe deya
        // <p>${posts.body}</p>---post er jaygay (posts) likhleo kaj hobena
        //<h3>Post Title</h3>
        //<p>New description</p>
        //vetore post er description na thakle element show korbena , ekhane (body) chilo tai ${post.body}deya hoiche.

        postContainer.appendChild(div);
        // console.log(post.title);
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


/*
http GET vs POST ????
CRUD operations????
CRUD vs REST API???
 */
//know more about this interview questions
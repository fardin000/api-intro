
// console.log('connected');


function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayAlbums(data))
}////silly mistaken 
loadAlbums();

    function displayAlbums(albums){
        console.log(albums);
        const albumContainer = document.getElementById('albums');
        for(const album of albums){
            const p = document.createElement('p');
            p.style.textAlign = 'left';
            p.innerText = album.title;
            albumContainer.appendChild(p);
        }

    }
/// vul kore ekhane 1st fetch function er bracket rekhe dicilam , tai browser e kichu show kortecilo na 




//hw-----photos ar comments gula dekhao tomar browser e 
//etai challenge
//comments: name and email type kichu er age dekhano hoyeche.
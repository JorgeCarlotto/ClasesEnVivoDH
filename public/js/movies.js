let body = document.querySelector('body');

let h1 = document.querySelector('h1');


let darkMode = confirm('Desea modo oscuro?');

if(darkMode == true){
    body.style.background ='#7f7f7f';
    body.classList.add('fondoMoviesList');
}

h1.innerText += 'LISTADO DE PELICULAS';

h1.style.color = 'white';

h1.style.background = 'teal'

h1.style.padding = '20px'


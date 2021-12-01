 window.onload = function() {
 
const d = document;
d.querySelector(".container").style.display = "block";
let main = d.querySelector('main');
let body = d.querySelector('body');
let h2 = d.querySelector('h2');
let a = d.querySelector('a');
let p = d.querySelectorAll('p');

let user = prompt('Cual es tu nombre?',"Invitado")

user == '' ? h2.innerHTML += "invitado" : h2.innerHTML += " " + user;


h2.style.textTransform = 'uppercase';


a.style.color = '#E51B3E';


resultFondo = confirm("¿Desea colocar un fondo de pantalla?");

resultFondo ? body.classList.add('fondo') : null;

for (let i = 0; i < p.length; i++) {

    i % 2 == 0 ? p[i].classList.add('destacadoPar') : p[i].classList.add('destacadoImpar')
}


 }


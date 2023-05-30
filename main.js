import { estoque } from "./estoque.js";

function setup(){
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
}


atualiza();

function envia(evento){
    evento.preventDefault();
    console.log('Formulário enviado');
    estoque.estado++;
    atualiza();
}



function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estoque.estado}</li>`;
}
import {itens, x} from "./estoque.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.remover.addEventListener('click', remove);

atualiza();

function remove(){
    
}

function setup(){
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
}


function envia(evento){
    evento.preventDefault();
    console.log('Formulário enviado');
    x.estado++;
    atualiza();
}


function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${x.estado}</li>`;
}


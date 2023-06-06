import {itens, x} from "./estoque.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.remover.addEventListener('click', remove);


function remove(){
    console.log('remove acionado');
    remover();
    atualiza();
}

function setup(){
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
}


function envia(evento){
    evento.preventDefault();
    console.log('Formulário enviado');
    const a = form.valor.value;
    adicionar(n);
    atualiza();
}


function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${x.estado}</li>`;
}


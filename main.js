import {itens, adicionar, remover} from "./estoque.js";

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
    adicionar(a);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}


function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const z = itens();

    for(let i=0; i<itens.length;i++){
        const li = document.createElement('li');
        li.textContent = z[i];
        ol.appendChild(li);
    }

    z.push("Boom");
}


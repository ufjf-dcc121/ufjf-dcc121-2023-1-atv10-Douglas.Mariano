
const x = {estado: []};

export function itens(){
    return [...x.estado];
}

export function remover(){
    x.estado.pop();
}

export function adicionar(valor){
    x.estado.push(valor);
}


export const x = {estado: 0};

export function itens(){
    return estado;
}

export function remover(){
    x.estado.pop();
}

export function adicionar(valor){
    x.estado.push(valor);
}

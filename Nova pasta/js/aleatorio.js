const nomes = ["Cleia", "João", "Maria Eduarda", "luiz", "Amanda", "Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
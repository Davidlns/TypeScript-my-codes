// aqui, estamos estabelecendo um comportamento previsivel, para evitar que o sistema pare de rodar, ou de algum tipo de erro.
// importante para diminuir as vunerabilidades do sistema

function testar_confianca(x: number, y?: number): number { //y? faz com que o programa verifique se a variável recebida realmente é do tipo number, realiza uma verificação de tipagem
    return x + (y ?? 10); // se y for do tipo number, retorna x + y, caso não seja, retorna x + 10
}

let x1: number = testar_confianca(1, 9); // nesse teste y é 9, e atende a tipagem estabelecida na função. Retorna(10)
let x2: number = testar_confianca(1); // nesse caso não especificamos o tipo de y, e ele não será reconhecido como number. Retorna(11)
let x3: number = testar_confianca(1, undefined); // aqui declaramos o segundo parametro y como undefined, ou seja tambem não passará de forma positiva na verificação. Retorna(11)

console.log(`Teste 1: ${x1}`);
console.log(`Teste 2: ${x2}`);
console.log(`Teste 3: ${x3}`);
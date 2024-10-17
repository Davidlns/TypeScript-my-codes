function func_testar_ns(par_valor: number|string): number{
    switch (typeof par_valor){ // o switch possibilita que typeof seja usado uma unica vez, simplificando a sintaxe, e melhorando o desempenho do programa
        case 'number':
            return par_valor;
        case 'string':
            return par_valor.length; // retorna o comprimento da string
        default:
            throw new Error(`O parâmetro possui um tipo que não é suportado: ${par_valor}`);
    }
}

let t_msg_ns: (number | string) = func_testar_ns("isto é um teste");
console.log(`O resultado da execução da função é: ${t_msg_ns}`);
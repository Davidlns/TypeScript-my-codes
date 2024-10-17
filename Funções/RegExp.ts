function checar_todas_palavras(par_padrao: RegExp, par_texto: string[]): number {
    let total: number = 0;
    for(var val of par_texto){
        if(par_padrao.test(val)){ // .test é um método usado para testar a regex
            total++;
        }
    }
    return total;
}

const vetor_texto: string[] = ["12345-657","82345-67","92445-467"];
const p_regex: RegExp = /\d{5}-\d{3}/;

let r_teste: number = checar_todas_palavras(p_regex, vetor_texto);
let n: number = vetor_texto.length;
console.log(`Das ${n} palavras, o total que satisfaz o padrão ${p_regex} é de: ${r_teste}`);
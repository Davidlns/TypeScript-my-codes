function checar_padrao(par_padrao: RegExp, par_texto: string): string { //RegExp (define o parametro como expressão regular), procura por padrões
    if(par_padrao.test(par_texto)){ // procura o padrão dentro da string par_texto
        return "Foi detectado o padrão dentro do texto"
    }
    return "Não foi detectado o padrão dentro do texto";
}

const texto_teste : string = "O objetivo desse texto é realizar testes";
const padrao_regex : RegExp = /te/; // define um padrão do tipo regexp

let res_teste: string = checar_padrao(padrao_regex, texto_teste);
console.log(`O resultado da execução do regex foi: ${res_teste}`);


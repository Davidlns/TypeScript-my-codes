// sintaxe de funções sem retorno em TS

function imprimir_ts(msg: string, num: number): void{ // funções do tipo void não retornam nada // msg e num são parametros da função e tiveram seus tipos definidos
    console.log(`O conteúdo da variável mensagem é ${msg} e da variável numérica é ${num}`);
}

let tnum: number = 10;
let tmsg: string = "este é um teste";
imprimir_ts(tmsg, tnum);

// -----------------------------------------------------------------------
// funções com retorno em TS

function somar_ts(num1: number, num2: number): number {
    return num1 + num2;
}

let x: number = 10;
let y: number = 20;

let res = somar_ts(x, y);

console.log(`A soma de ${x} + ${y} = ${res}`);

// -----------------------------------------------------------------------

function concatenar_texto(texto1: string, texto2: string): string {
    return `${texto1},  ${texto2};`;
}

let str1: string = "string 1";
let str2: string = "string 2";

let juncao = concatenar_texto(str1, str2);

console.log(juncao);
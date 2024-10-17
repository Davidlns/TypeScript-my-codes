let variavel: boolean = true;

if(typeof variavel === "string") { // 3 iguais permite a comparação de valores sem conversão de tipos // caso use == os valores sao convertidos ante da comparação
    console.log("variavel é do tipo string");
}
if(typeof variavel === "number") {
    console.log("variavel é do tipo number");
}
if(typeof variavel === "bigint"){ // bigInt é um numero inteiro com maior precisão // normalmente usamos para numeros maiores do que os suportados pelo tipo number
    console.log("Variavel é do tipo bigint");
}
if(typeof variavel === "boolean"){
    console.log("Variavel é do tipo boolean");
}
if(typeof variavel === "symbol"){
    console.log("Variavel é do tipo symbol");
}
if(typeof variavel === "undefined"){
    console.log("Variavel é do tipo boolean");
}
if(typeof variavel === "object"){
    console.log("Variavel é do tipo boolean");
}
if(typeof variavel === "function"){
    console.log("Variavel é do tipo boolean");
}

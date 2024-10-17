let input: string | null = prompt("Digite sua média final:");
let mediaFinal: number = parseFloat(input || "0");
if(mediaFinal == 10){
    console.log("Resultado exelente!");
}else if(mediaFinal > 8){
    console.log("Sua nota é maior que 8!");
}else if(mediaFinal >= 7){
    console.log("Aprovado!");
}else{
    console.log("vamos estudar mais!");
}
let input: string | null = prompt("Digite sua Idade");
let idade: number = parseFloat(input || "0"); // caso input receba um valor false ele receberá o valor de "0" que será convertido para numérico com parseFloat
let podeVotar: string;
let habilitado: string = "já pode votar";
let nao_habilitado: string = "Muito jovem para votar";
podeVotar = (idade < 16) ? nao_habilitado:habilitado; // se idade < 16 então(?) exiba a variavel nao_habilitado, senão(:) exiba a variável habilitado
console.log(podeVotar);
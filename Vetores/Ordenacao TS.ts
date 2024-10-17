let vetor: number[] = [3, 8, 4, 1, 9, 34, 21, 12, 6, 58, 27];
const n: number = vetor.length - 1;
let ordem: boolean = false;

while (!ordem){
    ordem = true;
    for(let i = 0; i < n; i++){
        if(vetor[i + 1] < vetor[i]){
          [vetor[i + 1], vetor[i]] = [vetor[i], vetor[i + 1]]; // referencia a vetor com [] e desestruturação // sem necessitar de variável auxiliar
          ordem = false;  
        }
    }
}

console.log(vetor);
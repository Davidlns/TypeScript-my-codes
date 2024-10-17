let vetor:number[] = [6,1,7,3,4,5];

//Algoritimo para ordenação Bolha
const n = vetor.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (vetor [j] > vetor[j + 1]) {
           [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
        }
    }
}

console.log(`O vetor ordenado é ${vetor}`);
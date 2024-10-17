let vetor: number[] = [3, 8, 4, 1, 9, 34, 21, 12, 6, 58, 27, 876, 244, 135, 986, 15674, 23, 15, 38, 47];

let maior: number = vetor[0];

for(let i of vetor){
    if (i > maior){
        maior = i;
    }
}

console.log(`o maior indice do vetor é ${maior}`);
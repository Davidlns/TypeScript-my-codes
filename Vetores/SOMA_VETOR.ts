function soma_vetor(vetor: number[]): number {
    let soma: number = 0;

    for(let i of vetor){
        soma += i;
    }

    return soma;
}

let vetor: number[] = [5, 4, 2, 1, 10];

let somav = soma_vetor(vetor);

console.log(`A soma dos elementos do vetor é: ${somav}`);
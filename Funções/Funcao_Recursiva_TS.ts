// uma função recursiva é a fução que chama a si mesma para chegar ao resultado final

function fatorial(n: number): number{
    if((n == 0) || (n == 1)){ // caso base // serve como ponto de parada para a recursão
        return 1;
    }
    return n * fatorial(n - 1);
}

let numero: number = 5;
let fat = fatorial(numero);
console.log(`O fatorial de ${numero} é:${fat}`);
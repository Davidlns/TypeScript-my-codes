let soma_anom_ts_1 = (x: number, y: number) => {
    return x + y;
}

let soma_anom_ts_2 = (x: number, y: number): number => x + y;

let c: number = 10;
let d: number = 20;

console.log(`Teste 01: a soma de ${c} com ${d} é: ${soma_anom_ts_1(c,d)}`);

console.log(`Teste 02: a soma de ${c} com ${d} é: ${soma_anom_ts_2(c,d)}`);
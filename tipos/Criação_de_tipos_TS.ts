type alfanumerico = string | number | undefined;
function adicionar_concatenar(a: alfanumerico, b: alfanumerico): alfanumerico{
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    return 'Os argumentos são invalidos. Ambos devem ser números ou strings.';
}
let t_msg_1: alfanumerico = adicionar_concatenar(10, 20);
let t_msg_2: alfanumerico = adicionar_concatenar("Funcionou ", "Corretamente");
let t_msg_3: alfanumerico = adicionar_concatenar(10, "t");

console.log(`Teste 1: ${t_msg_1}`);
console.log(`Teste 2: ${t_msg_2}`);
console.log(`Teste 3: ${t_msg_3}`);
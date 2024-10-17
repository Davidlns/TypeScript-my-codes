function saudar_pessoas(saudacao: string, ...nomes_pessoas: string[]) {
    return saudacao + " " + nomes_pessoas.join(", ") + "!";
}

let msg1: string = saudar_pessoas("Bom dia!", "Alunos", "Alunas!");
let msg2: string = saudar_pessoas("Bom dia!", "Alunos", "Alunas", "Professoras", "Professores");

console.log(`Primeira saudação: ${msg1}`);
console.log(`Segunda saudação: ${msg2}`);
let saudar_pessoas_af = (saudacao: string, ...nomes_pessoas: string[]) => { //usando Rest com uma ArrowFunction
    return saudacao + " " + nomes_pessoas.join(", ")+ "!";
}

let msg1_af: string = saudar_pessoas_af("Bom dia!", "Alunos", "Alunas");
let msg2_af: string = saudar_pessoas_af("Bom dia!", "Alunos", "Alunas", "Professoras", "Professores");

console.log(`Primeira saudação: ${msg1_af}`);
console.log(`Segunda saudação: ${msg2_af}`);

class Estudante<T, U> { //T e U são tipos genéricos // que serão definidos quando instanciarmos os objetos
    private id: T|undefined;
    private nome: U|undefined;

    public set_valor(id: T, name: U): void {
        this.id = id;
        this.nome = name;
    }
    public exibir_dados():void {
        console.log(`Id = ${this.id}, Nome = ${this.nome}`);
    }
}

let estudante_01 = new Estudante<number, string>();
estudante_01.set_valor(7709,"Isaac Newton");
estudante_01.exibir_dados();
let estudante_02 = new Estudante<string, string>();
estudante_02.set_valor("9903", "Coraline");
estudante_02.exibir_dados();
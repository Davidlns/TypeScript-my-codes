class Pessoa {
    private nome: string = '';
    protected ender: string = '';

    constructor(nome: string, ender: string = '') {
        this.set_nome(nome);
        this.set_ender(ender);
    }

    private set_nome = (nome: string) => {
        this.nome = nome;
    }

    private set_ender = (ender: string) => {
        this.ender = ender;
    }

    public get_nome = (): string => {
        return this.nome;
    }

    public get_ender = (): string => {
        return this.ender;
    }
}

// Classe 1 herdeira de Pessoa
class PessoaFisica extends Pessoa {
    private cpf: string = ''; // default

    constructor(nome: string, ender: string = '', cpf: string) {
        super(nome, ender);
        this.set_cpf(cpf);
    }

    private set_cpf = (cpf: string) => {
        this.cpf = cpf;
    }

    public get_cpf = (): string => {
        return this.cpf;
    }

    public get_dados = (): void => {
        console.log(`Dados da pessoa física: nome = ${this.get_nome()}, Endereço = ${this.get_ender()}, CPF = ${this.get_cpf()}`);
    }
}

// Classe 2 herdeira de Pessoa
class PessoaJuridica extends Pessoa {
    private cnpj: string = ''; // default

    constructor(nome: string, ender: string = '', cnpj: string) {
        super(nome, ender);
        this.set_cnpj(cnpj);
    }

    private set_cnpj = (cnpj: string) => {
        this.cnpj = cnpj;
    }

    public get_cnpj = (): string => {
        return this.cnpj;
    }

    public get_dados = (): void => {
        console.log(`Dados da pessoa jurídica: nome = ${this.get_nome()}, endereço = ${this.get_ender()}, CNPJ = ${this.get_cnpj()}`);
    }
}

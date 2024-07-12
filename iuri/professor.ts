var leitor= require("readline-sync")

class Pessoa{
    nome: string
    idade: number
    ano_exp: number

    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp
    }
}

class Escola{
    pessoa: Pessoa
    nome_esc: string
    end_esc: string
    num_esc: number

    constructor(pessoa: Pessoa, nome_res: string, end_res: string, num_end: number){
        this.pessoa = pessoa
        this.nome_esc = nome_res
        this.end_esc = end_res
        this.num_esc = num_end
    }

    getProfessor(): void{
        console.log(`Olá, sou o professor ${this.pessoa.nome}, tenho ${this.pessoa.idade} e tenho  ${this.pessoa.ano_exp} `)   
    }

    setProfessor(): void{

    let nomeUp = leitor.question("Qual o nome do profesor?")
    let idadeUp = leitor.question("Qual o nome do profesor?")
    let ano_xpUp = leitor.question("Qual o nome do profesor?")

    this.pessoa.nome = nomeUp
    this.pessoa.idade = idadeUp
    this.pessoa.ano_exp = ano_xpUp

   }

   setEscola(): void{
    console.log(`Olá, somos a escola ${this.nome_esc}, fica na ${this.end_esc} numero ${this.num_esc}`   )   
}
}




var leitor = require('readline-sync')

class Pessoa{

    nome: string
    idade: number

constructor(nome: string, idade: number){

    this.nome = nome
    this.idade = idade

}

cumprimentar(): void{

    console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
}
}

const novaPessoa = new Pessoa ("Leleo", 17)

novaPessoa.cumprimentar()

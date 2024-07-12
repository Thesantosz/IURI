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

class Criança extends Pessoa {
    cumprimentar(): void {
        console.log(`meu nome é ${this.nome}e  tenho ${this.idade}.`)
    }
}

class Adulto extends Pessoa {
    cumprimentar(): void {
        console.log(`meu nome é ${this.nome}e  tenho ${this.idade}.`)
    }
}

class Idoso extends Pessoa {
    cumprimentar(): void {
        console.log(`meu nome é ${this.nome}e  tenho ${this.idade}.`)
    }
}

let kid = new Criança("enzo", 6)
let adult = new Adulto("claudio", 32)
let odl = new Idoso("predi", 80)

kid.cumprimentar()
adult.cumprimentar()
odl.cumprimentar()
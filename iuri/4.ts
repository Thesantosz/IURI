var leitor = require('readline-sync')


class Aluno {

    nome: string
    notas: Array<number>


constructor(nome: string){

    this.nome = nome
    this.notas = []
}

perguntas(): void{

    var nota1 = leitor.questionInt("Qual sua nota? ")
    var nota2 = leitor.questionInt("Qual sua nota? ")
    var nota3 = leitor.questionInt("Qual sua nota? ")

   this.notas.push[nota1, nota2, nota3]
}

calcular(): void{

    let media=  (this.notas[0] + this.notas[1] + this.notas[2]) / 3

    console.log(`A média da nota de ${pergunta} é ${media}`)
}

}

var pergunta= leitor.question("Qual seu nome? ")

this.nome.push[pergunta]

let novaPessoa = new Aluno(pergunta)

novaPessoa.perguntas()
novaPessoa.calcular()










var leitor = require('readline-sync')

class Estudante{

    matricula: number
    nome: string 
    notaProva1: number
    notaProva2: number
    notaTrabalho: number
    
constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){

    this.matricula = matricula
    this.nome = nome
    this.notaProva1 = notaProva1
    this.notaProva2 = notaProva2
    this.notaTrabalho = notaTrabalho
}

media(): void{

let media = (this.notaProva1 + this.notaProva2) / 2

console.log(`-----------------${this.nome}-----------------
             -----------------${this.matricula}-----------------
             
             Prova 1 : ${this.notaProva1}
             Prova 2 : ${this.notaProva2}
             
             Média : ${(this.notaProva1 + this.notaProva2) / 2}`)

}

final(): void{

    let notaFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3
    
    if(notaFinal >= 6 ){

    console.log(`-----------------${this.nome}-----------------
             -----------------${this.matricula}-----------------
             
             Prova 1 : ${this.notaProva1}
             Prova 2 : ${this.notaProva2}
             Trabalho 1: ${this.notaTrabalho}
             
             Nota final : ${(this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3}
             
             O aluno ${this.nome} passou de ano`)
    }

    else{

        console.log(`-----------------${this.nome}-----------------
        -----------------${this.matricula}-----------------
        
        Prova 1 : ${this.notaProva1}
        Prova 2 : ${this.notaProva2}
        Trabalho 1: ${this.notaTrabalho}
        
        Nota final : ${(this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3}
        
        O aluno ${this.nome} não passou de ano`)
    
    }
             
    }
}

let novoEstudante = new Estudante(234, 'Leticio Rubra', 6 , 4, 5)

novoEstudante.media();

novoEstudante.final();






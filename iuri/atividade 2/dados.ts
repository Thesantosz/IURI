import { Pessoas } from "./pessoas";

let leitor = require('readline-sync');

class Perguntas extends Pessoas{

inserirDados(): void{

    let perguntaNome = leitor.question("Qual seu nome? ")
    let perguntaSobrenome = leitor.question("Qual seu sobrenome? ")
    let perguntaNomePai = leitor.question("Qual o nome do seu pai? ")
    let perguntaNomeMae = leitor.question("Qual o nome da sua mae? ")
    let perguntaNumeroRG = leitor.question("Qual o numero do seu RG? ")
    let perguntaNUmeroCpf = leitor.question("Qual seu CPF? ")
    let perguntaDataDeNascimento = leitor.question("Qual sua data de nascimento? ")

    this.nome = perguntaNome
    this.sobrenome = perguntaSobrenome
    this.nomePai = perguntaNomePai
    this.nomeMae = perguntaNomeMae
    this.numeroRg = perguntaNumeroRG
    this.numeroCpf = perguntaNUmeroCpf
    this.dataDeNascimento = perguntaDataDeNascimento


    console.log(`Seu nome é ${this.nome}`)
    console.log(`Seu sobrenome é ${this.sobrenome}}`)
    console.log(`O nome do seu pai é  ${this.nomePai}}`)
    console.log(`O nome da sua mae é   ${this.nomeMae}}`)
    console.log(`O nome do seu pai é  ${this.nomePai}}`)
    console.log(`O seu RG é ${this.numeroRg}}`)
    console.log(`O seu CPF é  ${this.numeroCpf}}`)
    console.log(`Sua data de nascimneto é  ${this.dataDeNascimento}}`)
    

};}



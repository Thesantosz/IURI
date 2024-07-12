var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.perguntas = function () {
        var nota1 = leitor.questionInt("Qual sua nota? ");
        var nota2 = leitor.questionInt("Qual sua nota? ");
        var nota3 = leitor.questionInt("Qual sua nota? ");
        this.notas.push[nota1, nota2, nota3];
    };
    Aluno.prototype.calcular = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        console.log("A m\u00E9dia da nota de ".concat(pergunta, " \u00E9 ").concat(media));
    };
    return Aluno;
}());
var pergunta = leitor.question("Qual seu nome? ");
this.nome.push[pergunta];
var novaPessoa = new Aluno(pergunta);
novaPessoa.perguntas();
novaPessoa.calcular();

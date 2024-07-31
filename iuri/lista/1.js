var leitor = require('readline-sync');
var Estudante = /** @class */ (function () {
    function Estudante(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Estudante.prototype.media = function () {
        var media = (this.notaProva1 + this.notaProva2) / 2;
        console.log("-----------------".concat(this.nome, "-----------------\n             -----------------").concat(this.matricula, "-----------------\n             \n             Prova 1 : ").concat(this.notaProva1, "\n             Prova 2 : ").concat(this.notaProva2, "\n             \n             M\u00E9dia : ").concat((this.notaProva1 + this.notaProva2) / 2));
    };
    Estudante.prototype.final = function () {
        var notaFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
        if (notaFinal >= 6) {
            console.log("-----------------".concat(this.nome, "-----------------\n             -----------------").concat(this.matricula, "-----------------\n             \n             Prova 1 : ").concat(this.notaProva1, "\n             Prova 2 : ").concat(this.notaProva2, "\n             Trabalho 1: ").concat(this.notaTrabalho, "\n             \n             Nota final : ").concat((this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3, "\n             \n             O aluno ").concat(this.nome, " passou de ano"));
        }
        else {
            console.log("-----------------".concat(this.nome, "-----------------\n        -----------------").concat(this.matricula, "-----------------\n        \n        Prova 1 : ").concat(this.notaProva1, "\n        Prova 2 : ").concat(this.notaProva2, "\n        Trabalho 1: ").concat(this.notaTrabalho, "\n        \n        Nota final : ").concat((this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3, "\n        \n        O aluno ").concat(this.nome, " n\u00E3o passou de ano"));
        }
    };
    return Estudante;
}());
var novoEstudante = new Estudante(234, 'Leticio Rubra', 6, 4, 5);
novoEstudante.media();
novoEstudante.final();

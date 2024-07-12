var leitor = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade));
    };
    return Pessoa;
}());
var novaPessoa = new Pessoa("Leleo", 17);
novaPessoa.cumprimentar();

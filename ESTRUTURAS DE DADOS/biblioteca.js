var ask = require('readline-sync');
var PilhasdeLivros = /** @class */ (function () {
    function PilhasdeLivros() {
        this.livros = [];
    }
    PilhasdeLivros.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    PilhasdeLivros.prototype.retirarLivro = function () {
        var livro = this.livros.pop();
        if (livro) {
            console.log("".concat(livro, " foi removido da biblioteca"));
        }
        else {
            console.log("A biblioteca esta vazia ");
        }
        return;
        livro;
    };
    PilhasdeLivros.prototype.vazia = function () {
        return this.livros.length === 0;
    };
    PilhasdeLivros.prototype.size = function () {
        return this.livros.length;
    };
    PilhasdeLivros.prototype.getLivros = function () {
        console.log(this.livros);
    };
    return PilhasdeLivros;
}());
var novaPilha = new PilhasdeLivros();
var loop = true;
while (loop) {
    console.log("                   \n                        1. ADICIONAR LIVRO\n                        2. REMOVER LIVRO\n                        3. VER LIVROS\n                        4. SAIR\n                        ");
    var pergunta = ask.question('ESCOLHA UMA OPÇÃO: ');
    switch (pergunta) {
        case '1':
            var pergunta_1 = ask.question('Que livro deseja adicionar: ');
            novaPilha.adicionarLivro(pergunta_1);
            ask.question("pressione ENTER para sair...");
            console.clear();
            break;
        case "2":
            novaPilha.retirarLivro();
            break;
        case '3':
            novaPilha.getLivros();
            break;
        case '4':
            loop = false;
            break;
        default: console.log('ESTA OPÇAO NÃO ESTA DISPONIVEL');
    }
}

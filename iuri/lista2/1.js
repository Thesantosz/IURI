"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
var reader = require('readline-sync');
var Contador = /** @class */ (function () {
    function Contador(contagem) {
        this.contagem = [1, 2, 3, 4, 5, 6];
    }
    Contador.prototype.zerar = function () {
        this.contagem = [];
    };
    Contador.prototype.imcrementar = function () {
        console.log(this.contagem.push(this.contagem.length + 1));
    };
    Contador.prototype.descrementar = function () {
        var remover = this.contagem.pop();
        console.log(this.contagem);
    };
    Contador.prototype.valor = function () {
        console.log(this.contagem.length);
    };
    return Contador;
}());
exports.Contador = Contador;
var NovoContador = new Contador([1, 2, 3, 4, 5, 6]);
NovoContador.descrementar();
